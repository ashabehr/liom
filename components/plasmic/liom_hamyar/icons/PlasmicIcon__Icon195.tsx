// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon195IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon195Icon(props: Icon195IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeWidth={"1.5"}>
        <circle cx={"12"} cy={"12"} r={"10"}></circle>

        <path d={"M15 12h-3m0 0H9m3 0V9m0 3v3"} strokeLinecap={"round"}></path>
      </g>
    </svg>
  );
}

export default Icon195Icon;
/* prettier-ignore-end */
