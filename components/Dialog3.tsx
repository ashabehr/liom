import * as React from "react";
import {
  PlasmicDialog3,
  DefaultDialog3Props
} from "./plasmic/liom_hamyar/PlasmicDialog3";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export interface Dialog3Props extends DefaultDialog3Props {}

function Dialog3(props: Dialog3Props) {
  return (
    <PlasmicDialog3
      {...props}
      overrides={{
        // مطمئن می‌شیم همیشه یک عنوان مخفی داخل دیالوگ باشه
        dialogContent: {
          // ⛔ جلوگیری از فوکوس خودکار Radix Dialog
          props: {
            onOpenAutoFocus: (e) => e.preventDefault(),
          },
          children: (
            <>
              <VisuallyHidden>
                <DialogTitle>Dialog</DialogTitle>
              </VisuallyHidden>
              {props.children}
            </>
          ),
        },
      }}
    />
  );
}

export default Dialog3;
