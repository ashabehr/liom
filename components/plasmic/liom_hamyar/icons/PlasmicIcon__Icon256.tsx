/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon256IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon256Icon(props: Icon256IconProps) {
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

      <g clipPath={"url(#a)"}>
        <mask
          id={"b"}
          width={"24"}
          height={"24"}
          x={"0"}
          y={"0"}
          maskUnits={"userSpaceOnUse"}
          style={{
            maskType: 'alpha"',
          }}
        >
          <path fill={"#D9D9D9"} d={"M24 0H0v24h24z"}></path>
        </mask>

        <g mask={"url(#b)"}>
          <path
            fill={"#fff"}
            d={
              "M17 2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V6.98C22 4.23 19.76 2 17 2M8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
            }
          ></path>

          <path
            fill={"url(#c)"}
            d={
              "M17 2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V6.98C22 4.23 19.76 2 17 2M8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
            }
          ></path>
        </g>
      </g>

      <defs>
        <linearGradient
          id={"c"}
          x1={"6.5"}
          x2={"19.5"}
          y1={"16"}
          y2={"3.5"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#7242BA"}></stop>

          <stop offset={"1"} stopColor={"#EF70B7"}></stop>
        </linearGradient>

        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon256Icon;
/* prettier-ignore-end */
