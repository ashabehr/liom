import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { CodeComponentMeta } from "@plasmicapp/host";

type SwiperSliderProps = {
  children?: React.ReactNode;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  showPagination?: boolean;
  bulletColor?: string;
  activeBulletColor?: string;
  className?: string;
  showNavigationButtons?: boolean;
  prevButtonSlot?: React.ReactNode;
  nextButtonSlot?: React.ReactNode;

  // قفل کردن اسلاید
  lockSlides?: boolean;
  onLockSlidesChange?: (locked: boolean) => void;

  // وضعیت اسلاید فعال
  activeSlideIndex?: number;
  onActiveSlideIndexChange?: (index: number) => void;
};

export const SwiperSlider = forwardRef((props: SwiperSliderProps, ref) => {
  const {
    children,
    loop = true,
    autoplay = true,
    autoplayDelay = 3000,
    showPagination = true,
    bulletColor = "#888888",
    activeBulletColor = "#ffffff",
    className,
    showNavigationButtons = true,
    prevButtonSlot,
    nextButtonSlot,
    lockSlides = false,
    onLockSlidesChange,
    activeSlideIndex = 0,
    onActiveSlideIndexChange,
  } = props;

  const swiperRef = useRef<SwiperType | null>(null);
  const slides = React.Children.toArray(children);

  // sync با index بیرونی
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.realIndex !== activeSlideIndex
    ) {
      swiperRef.current.slideToLoop(activeSlideIndex);
    }
  }, [activeSlideIndex]);

  // قفل یا باز کردن drag/direction/autoplay
useEffect(() => {
  if (!swiperRef.current) return;

  // قفل کردن اسلایدها
  swiperRef.current.allowSlideNext = !lockSlides;
  // swiperRef.current.allowSlidePrev = !lockSlides;

  // کنترل autoplay
  if (lockSlides) {
    swiperRef.current.autoplay?.stop();
  } else if (autoplay) {
    swiperRef.current.autoplay?.start();
  }

  // قفل کردن کلیک روی دات‌ها
  const paginationEl = swiperRef.current.pagination?.el as HTMLElement;
  if (paginationEl) {
    if (lockSlides) {
      paginationEl.classList.add("no-pointer-events");
    } else {
      paginationEl.classList.remove("no-pointer-events");
    }
  }
}, [lockSlides, autoplay]);


  // expose method slideTo
  useImperativeHandle(ref, () => ({
    slideTo: (index: number) => {
      swiperRef.current?.slideToLoop(index);
    },
  }));

  // دکمه قبلی
  const handlePrev = () => {
    if (!lockSlides) {
      swiperRef.current?.slidePrev();
    }
  };

  // دکمه بعدی
  const handleNext = () => {
    if (!lockSlides) {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: ${bulletColor} !important;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background-color: ${activeBulletColor} !important;
            opacity: 1;
          }
        `}
      </style>

      <Swiper
        dir="ltr"
        loop={loop}
        autoplay={autoplay ? { delay: autoplayDelay } : false}
        pagination={showPagination ? { clickable: true } : false}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.el.classList.remove("swiper-rtl");
          swiper.el.setAttribute("dir", "ltr");

          // sync قفل به حالت اولیه
          swiper.allowSlideNext = !lockSlides;
          swiper.allowSlidePrev = !lockSlides;
        }}
        onSlideChange={(swiper) => {
          onActiveSlideIndexChange?.(swiper.realIndex);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {showNavigationButtons && (
        <>
          {(loop || activeSlideIndex > 0) && (
            <div
              onClick={handlePrev}
              className="absolute bottom-4 left-4 z-10 cursor-pointer"
            >
              {prevButtonSlot || (
                <button className="bg-black/50 text-white px-3 py-2 rounded-full">
                  ◀
                </button>
              )}
            </div>
          )}

          {(loop || activeSlideIndex < slides.length - 1) && (
            <div
              onClick={handleNext}
              className="absolute bottom-4 right-4 z-10 cursor-pointer"
            >
              {nextButtonSlot || (
                <button className="bg-black/50 text-white px-3 py-2 rounded-full">
                  ▶
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
});

export const SwiperSliderMeta: CodeComponentMeta<SwiperSliderProps> = {
  name: "SwiperSlider",
  importPath: "@/components/SwiperSlider",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        { type: "text", value: "اسلاید ۱" },
        { type: "text", value: "اسلاید ۲" },
        { type: "text", value: "اسلاید ۳" },
      ],
    },
    loop: { type: "boolean", defaultValue: true },
    autoplay: { type: "boolean", defaultValue: true },
    autoplayDelay: { type: "number", defaultValue: 3000 },
    showPagination: { type: "boolean", defaultValue: true },
    bulletColor: {
      type: "color",
      defaultValue: "#888888",
    },
    activeBulletColor: {
      type: "color",
      defaultValue: "#ffffff",
    },
    className: { type: "class" },
    showNavigationButtons: {
      type: "boolean",
      displayName: "نمایش دکمه‌های ناوبری",
      defaultValue: true,
    },
    prevButtonSlot: {
      type: "slot",
      displayName: "دکمه قبلی",
    },
    nextButtonSlot: {
      type: "slot",
      displayName: "دکمه بعدی",
    },
    activeSlideIndex: {
      type: "number",
      displayName: "اسلاید فعال",
      description: "ایندکس اسلاید فعال (۰-based)",
      defaultValue: 0,
    },
    onActiveSlideIndexChange: {
      type: "eventHandler",
      displayName: "وقتی اسلاید تغییر می‌کند",
      argTypes: [{ name: "index", type: "number" }],
    },
    lockSlides: {
      type: "boolean",
      displayName: "قفل کردن حرکت اسلاید",
      defaultValue: false,
    },
    onLockSlidesChange: {
      type: "eventHandler",
      displayName: "وقتی lockSlides تغییر می‌کند",
      argTypes: [{ name: "locked", type: "boolean" }],
    },
  },
  states: {
    activeSlideIndex: {
      type: "writable",
      variableType: "number",
      valueProp: "activeSlideIndex",
      onChangeProp: "onActiveSlideIndexChange",
    },
    lockSlides: {
      type: "writable",
      variableType: "boolean",
      valueProp: "lockSlides",
      onChangeProp: "onLockSlidesChange",
    },
  },
};
