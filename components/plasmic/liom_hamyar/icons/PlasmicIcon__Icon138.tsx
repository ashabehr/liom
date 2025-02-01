// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon138IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon138Icon(props: Icon138IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 152 200"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M146.862 124.138C146.862 163.274 115.136 195 76 195c-39.136 0-70.862-31.726-70.862-70.862 0-12.711 4.391-26.568 11.325-40.436 6.911-13.822 16.18-27.323 25.538-39.233C51.347 32.572 60.707 22.36 67.734 15.12A348.699 348.699 0 0176 6.873a348.67 348.67 0 018.266 8.247c7.027 7.241 16.387 17.453 25.734 29.35 9.358 11.91 18.626 25.411 25.537 39.233 6.934 13.868 11.325 27.725 11.325 40.436z"
        }
        stroke={"currentColor"}
        strokeWidth={"10"}
      ></path>
    </svg>
  );
}

export default Icon138Icon;
/* prettier-ignore-end */
