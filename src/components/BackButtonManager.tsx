import React, { useEffect } from 'react';
import { CodeComponentMeta } from "@plasmicapp/host";

type BackButtonManagerProps = {
  onBackPress?: () => void; // تابعی که هنگام فشردن دکمه بازگشت اجرا می‌شود
};

export const BackButtonManager = (props: BackButtonManagerProps) => {
  const { onBackPress } = props;

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof history !== 'undefined') {
      const handlePopState = () => {
        if (onBackPress) {
          onBackPress(); // اجرای تابع مشخص شده توسط کاربر
        } else {
          // بازگرداندن وضعیت به حالت فعلی در تاریخچه
          history.pushState(null, null, location.href);
        }
      };

      // اضافه کردن یک حالت اولیه به تاریخچه
      history.pushState(null, null, location.href);

      // اضافه کردن رویداد popstate
      window.addEventListener("popstate", handlePopState);

      // حذف listener هنگام حذف کامپوننت
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [onBackPress]);

  return null; // این کامپوننت نیازی به رندر چیزی در UI ندارد
};

export const BackButtonManagerMeta: CodeComponentMeta<BackButtonManagerProps> = {
  name: "BackButtonManager",
  importPath: "@/components/BackButtonManager",
  props: {
    onBackPress: {
      type: "eventHandler",
      description: "تابع برای اجرا هنگام فشردن دکمه بازگشت.",
    },
  },
};
