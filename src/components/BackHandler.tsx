import { useEffect, useRef } from "react";
import { CodeComponentMeta } from "@plasmicapp/host";

type BackHandlerProps = {
  onBack?: () => void;
  active?: boolean;
};

export const BackHandler = ({ onBack, active = true }: BackHandlerProps) => {
  const hasPushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !active) return;

    const handlePopState = (e: PopStateEvent) => {
      console.log("[BackHandler] popstate triggered", e.state);

      if (e.state?.isCustom) {
        console.log("[BackHandler] onBack called");
        onBack?.();
        window.history.pushState({ isCustom: true }, "");
      } else {
        console.log("[BackHandler] not a custom popstate", e.state);
      }
    };

    if (!hasPushedRef.current) {
      console.log("[BackHandler] pushing 2 custom states");
      // Push two entries to create a real back point
      window.history.pushState({ isCustom: false }, "");
      window.history.pushState({ isCustom: true }, "");
      hasPushedRef.current = true;
    } else {
      console.log("[BackHandler] already initialized");
    }

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onBack, active]);

  return null;
};

export const BackHandlerMeta: CodeComponentMeta<BackHandlerProps> = {
  name: "BackHandler",
  importPath: "@/components/BackHandler",
  props: {
    onBack: {
      type: "eventHandler",
      argTypes: [],
    },
    active: {
      type: "boolean",
      defaultValue: true,
    },
  },
};
