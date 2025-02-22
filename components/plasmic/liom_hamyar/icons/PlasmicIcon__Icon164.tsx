// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon164IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon164Icon(props: Icon164IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#ln7eA4DZpliUa)"} fill={"#6271FF"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M2.5 12.5c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10zm-2.5 0C0 19.404 5.596 25 12.5 25S25 19.404 25 12.5 19.404 0 12.5 0 0 5.596 0 12.5z"
          }
        ></path>

        <rect
          x={"6.25"}
          y={"10.938"}
          width={"12.5"}
          height={"3.125"}
          rx={"1.563"}
        ></rect>
      </g>

      <defs>
        <clipPath id={"ln7eA4DZpliUa"}>
          <path fill={"#fff"} d={"M0 0h25v25H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon164Icon;
/* prettier-ignore-end */
