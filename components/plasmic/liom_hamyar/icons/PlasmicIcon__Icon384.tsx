/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon384IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon384Icon(props: Icon384IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 34 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"17"} cy={"17"} r={"17"} fill={"url(#a)"}></circle>

      <path
        stroke={"#fff"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={"M11 17h12m-6 6V11"}
      ></path>

      <defs>
        <linearGradient
          id={"a"}
          x1={"30.663"}
          x2={"3.645"}
          y1={"2.732"}
          y2={"30.055"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#F672BC"}></stop>

          <stop offset={"1"} stopColor={"#8254C6"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon384Icon;
/* prettier-ignore-end */
