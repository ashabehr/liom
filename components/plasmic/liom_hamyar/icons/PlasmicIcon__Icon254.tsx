/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon254IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon254Icon(props: Icon254IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"url(#a)"}
        d={
          "M12.89 5.88H5.11A3.12 3.12 0 0 0 2 8.99v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.28.7 2.32.09 2.32-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11"
        }
      ></path>

      <path
        fill={"url(#b)"}
        d={
          "M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-1.93-1.08a.51.51 0 0 1-.26-.44V8.99c0-2.54-2.07-4.61-4.61-4.61H8.82c-.37 0-.63-.39-.46-.71C8.88 2.68 9.92 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11"
        }
      ></path>

      <defs>
        <linearGradient
          id={"a"}
          x1={"7.5"}
          x2={"15"}
          y1={"16"}
          y2={"7.5"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#7342BA"}></stop>

          <stop offset={"1"} stopColor={"#E96DB7"}></stop>
        </linearGradient>

        <linearGradient
          id={"b"}
          x1={"10"}
          x2={"21"}
          y1={"14.5"}
          y2={"3.5"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#7342BA"}></stop>

          <stop offset={"1"} stopColor={"#E96DB7"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon254Icon;
/* prettier-ignore-end */
