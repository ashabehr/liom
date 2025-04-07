import React, { useEffect } from 'react';
import { CodeComponentMeta } from "@plasmicapp/host";

type BackButtonManagerProps = {
  onBackPress?: () => void;
};

export const BackButtonManager = (props: BackButtonManagerProps) => {
  const { onBackPress } = props;

  useEffect(() => {
    const handlePopState = () => {
      if (onBackPress) {
        onBackPress(); // اگر تابعی برای مدیریت دکمه بازگشت تعریف شده باشد، اجرا می‌شود.
      } else {
        // اگر هیچ تابعی تعریف نشده باشد، تاریخچه را دوباره تنظیم کنید.
        history.pushState(null, null, location.href);
      }
    };

    // اضافه کردن یک حالت اولیه به تاریخچه
    history.pushState(null, null, location.href);

    // تنظیم listener برای دکمه «بازگشت»
    window.addEventListener("popstate", handlePopState);

    return () => {
      // پاکسازی listener هنگام حذف کامپوننت
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onBackPress]);

  return null; // این کامپوننت چیزی نمایش نمی‌دهد، فقط رویداد مدیریت می‌شود.
};

export const BackButtonManagerMeta: CodeComponentMeta<BackButtonManagerProps> = {
  name: "BackButtonManager",
  importPath: "@/components/BackButtonManager",
  props: {
    onBackPress: {
      type: "eventHandler",
      description: "تابع برای اجرا زمانی که دکمه بازگشت فشرده می‌شود.",
    },
  },
};
