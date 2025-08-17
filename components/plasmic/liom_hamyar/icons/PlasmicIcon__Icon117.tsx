/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon117IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon117Icon(props: Icon117IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39 18h-4v-5A11 11 0 0024 2h-2a11 11 0 00-11 11v5H7a2 2 0 00-2 2v24a2 2 0 002 2h32a2 2 0 002-2V20a2 2 0 00-2-2zm-25-5a7 7 0 012.05-4.95C17.363 6.737 20.143 5 22 5h2a7 7 0 014.95 2.05C30.263 8.363 32 11.143 32 13v5H14v-5zm24 30H8V21h30v22z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15 35a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon117Icon;
/* prettier-ignore-end */
