/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8NotificationSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8NotificationSvgIcon(
  props: Icons8NotificationSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "m21.993 17.467-.436-.298C21.494 17.126 20 16.082 20 14v-3c0-4.072-3.06-7.436-7-7.931V1h-2v2.069C7.06 3.564 4 6.928 4 11v3c0 1.756-1.645 3.235-1.659 3.248L2 17.546V20h7c0 1.654 1.346 3 3 3s3-1.346 3-3h7z"
        }
      ></path>
    </svg>
  );
}

export default Icons8NotificationSvgIcon;
/* prettier-ignore-end */
