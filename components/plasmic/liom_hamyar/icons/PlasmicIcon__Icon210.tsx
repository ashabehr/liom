// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon210IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon210Icon(props: Icon210IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      viewBox={"0 0 24 24"}
      data-name={"Line Color"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon line-color"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      >
        <path
          d={
            "M16.19 13.29A4 4 0 0015 16.12V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.87a4.13 4.13 0 00-1.26-2.91 6 6 0 118.45.07z"
          }
          stroke={"#000"}
        ></path>

        <path
          d={
            "M15 16a.49.49 0 000 .12V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.87A.57.57 0 009 16zm-2 5h-2v-1h2z"
          }
          stroke={"#2ca9bc"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon210Icon;
/* prettier-ignore-end */
