import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
  prevButtonSlot?: React.ReactNode;
  nextButtonSlot?: React.ReactNode;
};

export const SwiperSlider = ({
  children,
  loop = false, // بهتره حلقه رو false بذاری برای منطقی بودن دکمه‌ها
  autoplay = true,
  autoplayDelay = 3000,
  showPagination = true,
  bulletColor = "#888888",
  activeBulletColor = "#ffffff",
  className,
  prevButtonSlot,
  nextButtonSlot,
}: SwiperSliderProps) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const slides = React.Children.toArray(children);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`relative ${className}`}>
      {/* دکمه قبلی فقط اگر اسلاید اول نیست */}
      {activeIndex > 0 && (
        <div
          ref={prevRef}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
        >
          {prevButtonSlot || (
            <button className="bg-black/50 text-white px-3 py-2 rounded-full">
              ◀
            </button>
          )}
        </div>
      )}

      {/* دکمه بعدی فقط اگر اسلاید آخر نیست */}
      {activeIndex < slides.length - 1 && (
        <div
          ref={nextRef}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
        >
          {nextButtonSlot || (
            <button className="bg-black/50 text-white px-3 py-2 rounded-full">
              ▶
            </button>
          )}
        </div>
      )}

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
        loop={loop}
        autoplay={autoplay ? { delay: autoplayDelay } : false}
        pagination={showPagination ? { clickable: true } : false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const SwiperSliderMeta: CodeComponentMeta<SwiperSliderProps> = {
  name: "SwiperSlider",
  importPath: "@/components/SwiperSlider",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        { type: "text", value: "Slide 1" },
        { type: "text", value: "Slide 2" },
        { type: "text", value: "Slide 3" },
      ],
    },
    loop: { type: "boolean", defaultValue: false },
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
    prevButtonSlot: {
      type: "slot",
      hidePlaceholder: true,
      displayName: "Prev Button",
    },
    nextButtonSlot: {
      type: "slot",
      hidePlaceholder: true,
      displayName: "Next Button",
    },
  },
};
