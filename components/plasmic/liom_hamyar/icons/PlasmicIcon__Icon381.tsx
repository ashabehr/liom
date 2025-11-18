/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon381IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon381Icon(props: Icon381IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 737 737"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M522.042 61.417H214.958c-84.755 0-153.541 68.479-153.541 152.927v214.344c0 84.448 68.786 152.928 153.541 152.928h46.063c8.291 0 19.346 5.527 24.567 12.283l46.062 61.11c20.268 27.023 53.433 27.023 73.7 0l46.063-61.11c5.834-7.677 15.047-12.283 24.566-12.283h46.063c84.755 0 153.541-68.48 153.541-152.928V214.344c0-84.448-68.786-152.927-153.541-152.927M245.667 368.5c-17.197 0-30.709-13.819-30.709-30.708 0-16.89 13.819-30.709 30.709-30.709 16.889 0 30.708 13.819 30.708 30.709 0 16.889-13.512 30.708-30.708 30.708m122.833 0c-17.197 0-30.708-13.819-30.708-30.708 0-16.89 13.818-30.709 30.708-30.709s30.708 13.819 30.708 30.709c0 16.889-13.511 30.708-30.708 30.708m122.833 0c-17.196 0-30.708-13.819-30.708-30.708 0-16.89 13.819-30.709 30.708-30.709 16.89 0 30.709 13.819 30.709 30.709 0 16.889-13.512 30.708-30.709 30.708"
        }
      ></path>

      <defs>
        <linearGradient
          id={"a"}
          x1={"615.303"}
          x2={"127.507"}
          y1={"110.745"}
          y2={"604.304"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#F672BC"}></stop>

          <stop offset={"1"} stopColor={"#8254C6"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon381Icon;
/* prettier-ignore-end */
