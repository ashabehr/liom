import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CodeComponentMeta } from "@plasmicapp/host";
import type { Swiper as SwiperType } from "swiper";

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
  activeSlideIndex: number; // slide کنترل شده
  onActiveSlideChange?: (index: number) => void; // وقتی تغییر می‌کند
};

export const SwiperSlider = forwardRef(({
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
  activeSlideIndex,
  onActiveSlideChange,
}: SwiperSliderProps, ref) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const slides = React.Children.toArray(children);

  // اگر activeSlideIndex از parent تغییر کرد
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.realIndex !== activeSlideIndex
    ) {
      swiperRef.current.slideToLoop(activeSlideIndex);
    }
  }, [activeSlideIndex]);

  // متد دستی برای استفاده با ref
  useImperativeHandle(ref, () => ({
    slideTo: (index: number) => {
      swiperRef.current?.slideToLoop(index);
    },
  }));

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
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
        }}
        onSlideChange={(swiper) => {
          if (onActiveSlideChange) {
            onActiveSlideChange(swiper.realIndex);
          }
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
      displayName: "اندیس اسلاید فعال",
      description: "برای تنظیم اسلاید فعال (۰ به‌عنوان شروع)",
      defaultValue: 0,
    },
    onActiveSlideChange: {
      type: "eventHandler",
      displayName: "تغییر اسلاید",
      argTypes: [
        {
          name: "index",
          type: "number",
        },
      ],
    },
  },
};
