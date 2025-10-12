/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon325IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon325Icon(props: Icon325IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 -1 34 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"url(#a)"}
        d={
          "M1.027 7.273c-.179 3.116.388 6.215 1.646 9.296q1.886 4.622 5.51 8.246 3.624 3.623 8.245 5.51t9.297 1.648l-.112-7.038q-7.058 0-12.05-4.99-4.99-4.992-4.99-12.05z"
        }
      ></path>

      <path
        fill={"url(#b)"}
        d={"M25.73 32a7.273 7.273 0 1 0 0-14.546 7.273 7.273 0 0 0 0 14.546"}
      ></path>

      <path
        fill={"url(#c)"}
        d={"M8.275 14.546A7.273 7.273 0 1 0 8.275 0a7.273 7.273 0 0 0 0 14.546"}
      ></path>

      <defs>
        <radialGradient
          id={"b"}
          cx={"0"}
          cy={"0"}
          r={"1"}
          gradientTransform={"rotate(78.477 -.913 24.635)scale(11.6255)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00EE7A"}></stop>

          <stop offset={"1"} stopColor={"#00C853"}></stop>
        </radialGradient>

        <radialGradient
          id={"c"}
          cx={"0"}
          cy={"0"}
          r={"1"}
          gradientTransform={"rotate(78.477 1.045 5.221)scale(11.6255)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00EE7A"}></stop>

          <stop offset={"1"} stopColor={"#00C853"}></stop>
        </radialGradient>

        <linearGradient
          id={"a"}
          x1={"13.36"}
          x2={"13.36"}
          y1={"7.273"}
          y2={"32"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00EE7A"}></stop>

          <stop offset={"1"} stopColor={"#00C853"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon325Icon;
/* prettier-ignore-end */
