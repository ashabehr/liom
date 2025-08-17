/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon162IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon162Icon(props: Icon162IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#ma3JQGkxwP8Da)"}>
        <path
          d={"M8 16A8 8 0 118 0a8 8 0 010 16z"}
          stroke={"#6271FF"}
          strokeWidth={"3"}
        ></path>

        <rect
          x={"4"}
          y={"7"}
          width={"8"}
          height={"2"}
          rx={"1"}
          fill={"#6271FF"}
        ></rect>
      </g>

      <defs>
        <clipPath id={"ma3JQGkxwP8Da"}>
          <path fill={"#fff"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon162Icon;
/* prettier-ignore-end */
