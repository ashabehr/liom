import React, { useEffect } from 'react';
import { CodeComponentMeta } from "@plasmicapp/host";
import { useNavigate } from 'react-router-dom';

type BackButtonManagerProps = {
  onBackPress?: () => void;
};

export const BackButtonManager = (props: BackButtonManagerProps) => {
  const { onBackPress } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (onBackPress) {
        onBackPress(); // اجرای تابع مشخص شده توسط کاربر
      } else {
        // جلوگیری از بازگشت و بازگرداندن به صفحه فعلی
        navigate('.', { replace: true });
      }
    };

    // اضافه کردن listener برای مدیریت رویداد popstate
    window.addEventListener("popstate", handlePopState);

    return () => {
      // حذف listener هنگام پاکسازی کامپوننت
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate, onBackPress]);

  return null; // این کامپوننت چیزی در UI نمایش نمی‌دهد
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
