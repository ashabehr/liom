import React, { useEffect, useMemo, useState } from "react";
import toast, { ToastPosition, Toaster } from "react-hot-toast";
import { DataProvider, GlobalActionsProvider, GlobalContextMeta } from "@plasmicapp/host";
import axios from "axios";

type FragmentProps = React.PropsWithChildren<{
  previewApiConfig: Record<string, any>;
  apiConfig: Record<string, any>;
  rtl: boolean;
  primaryColor: string;
  toastStyle?: React.CSSProperties;
  toastDuration?: number;
}>;

export const Fragment = ({
  children,
  previewApiConfig,
  apiConfig,
  rtl,
  primaryColor,
  toastStyle,
  toastDuration = 3000,
}: FragmentProps) => {
  useEffect(() => {
    changeTheme(primaryColor);
  }, [primaryColor]);

  const changeTheme = (color: string) => {
    document.documentElement.style.setProperty("--primary", color);
  };

  const actions = useMemo(
    () => ({
      showToast: (
        type: "success" | "error",
        message: string,
        placement: ToastPosition = "top-right",
        duration?: number
      ) => {
        toast[type ?? "success"](message, {
          duration: duration ?? toastDuration,
          position: placement as ToastPosition,
          style: toastStyle,
          // یا می‌توانید از className برای استایل‌دهی استفاده کنید
          // className: 'your-toast-class',
        });
      },
      // ... بقیه actions
    }),
    [toastDuration, toastStyle]
  );

  return (
    <GlobalActionsProvider contextName="Fragment" actions={actions}>
      <DataProvider name="Fragment" data={{
          apiConfig: apiConfig ?? {},
          previewApiConfig: previewApiConfig ?? {},
          rtl,
          primaryColor,
        }} hidden>
        {children}
        <Toaster
          toastOptions={{
            style: toastStyle ?? {
              borderRadius: '100px',
              background: '#333',
              color: '#fff',
              padding: '16px',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
            success: {
              iconTheme: {
                primary: '#4BB543',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff4d4f',
                secondary: '#fff',
              },
            },
          }}
        />
      </DataProvider>
    </GlobalActionsProvider>
  );
};

export const fragmentMeta: GlobalContextMeta<FragmentProps> = {
  name: "Fragment",
  displayName: "Fragment",
  importPath: "@/fragment/fragment",
  props: {
    apiConfig: {
      displayName: "API Config",
      type: "object",
      description: `e.g. { withCredentials: true }`,
      helpText:
        "Read about request configuration options at https://axios-http.com/docs/req_config",
    },
    previewApiConfig: {
      displayName: "Preview API Config",
      type: "object",
      description: `e.g. { headers: { 'Authorization': 'XXX' } }`,
      editOnly: true,
      helpText:
        "Read about request configuration options at https://axios-http.com/docs/req_config",
    },
    rtl: {
      displayName: "RTL",
      type: "boolean",
      description: `Direction`,
    },
    primaryColor: {
      displayName: "Primary Color",
      type: "color",
      defaultValue: "#000000",
      defaultValueHint: "#000000",
    },
    toastStyle: {
      displayName: "Toast Style",
      type: "object",
      description: "Custom CSS styles for the toast",
    },
    toastDuration: {
      displayName: "Toast Duration",
      type: "number",
      defaultValue: 3000,
      description: "Default duration for toast messages in milliseconds",
    },
  },
  // ... بقیه متادیتا
};
