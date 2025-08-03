import { useEffect, useRef } from "react";
import { CodeComponentMeta } from "@plasmicapp/host";

type BackHandlerProps = {
  onBack?: () => void;
  active?: boolean;
};

export const BackHandler = ({ onBack, active = true }: BackHandlerProps) => {
  const hasPushedRef = useRef(false);

  useEffect(() => {
    console.log("BackHandler useEffect called");
    console.log("active:", active);

    if (typeof window === "undefined") {
      console.log("window is undefined, exiting effect");
      return;
    }
    if (!active) {
      console.log("active is false, exiting effect");
      return;
    }

    const handlePopState = (e: PopStateEvent) => {
      console.log("popstate triggered", e);
      if (e.state?.isCustom) {
        console.log("Custom popstate detected");
        if (onBack) {
          console.log("Calling onBack");
          onBack();
        } else {
          console.log("onBack not provided");
        }
        window.history.pushState({ isCustom: true }, "");
      } else {
        console.log("Not a custom state:", e.state);
      }
    };

    if (!hasPushedRef.current) {
      console.log("Pushing initial custom state to history");
      window.history.pushState({ isCustom: true }, "");
      hasPushedRef.current = true;
    } else {
      console.log("Already pushed custom state, skipping");
    }

    window.addEventListener("popstate", handlePopState);
    console.log("popstate listener added");

    return () => {
      console.log("Cleaning up popstate listener");
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
