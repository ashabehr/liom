import React, { useRef, useState } from "react";
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
};

export const SwiperSlider = ({
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
}: SwiperSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const slides = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

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
        dir="ltr" // مهم: جهت‌دهی لایه‌ی Swiper
        loop={loop}
        autoplay={autoplay ? { delay: autoplayDelay } : false}
        pagination={showPagination ? { clickable: true } : false}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // اطمینان از حذف جهت RTL
          swiper.el.classList.remove("swiper-rtl");
          swiper.el.setAttribute("dir", "ltr");
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {showNavigationButtons && (
        <>
          {(loop || activeIndex > 0) && (
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

          {(loop || activeIndex < slides.length - 1) && (
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
      displayName: "Show Navigation Buttons",
      defaultValue: true,
    },
    prevButtonSlot: {
      type: "slot",
      displayName: "Prev Button",
    },
    nextButtonSlot: {
      type: "slot",
      displayName: "Next Button",
    },
  },
};
