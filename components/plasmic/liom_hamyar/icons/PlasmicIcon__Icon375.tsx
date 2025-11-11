/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon375IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon375Icon(props: Icon375IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      stroke={"currentColor"}
      strokeWidth={"51.2"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M96 448q-14 0-23-9t-9-23V96q0-14 9-23t23-9h320q14 0 23 9t9 23v320q0 14-9 23t-23 9z"
        }
      ></path>
    </svg>
  );
}

export default Icon375Icon;
/* prettier-ignore-end */
