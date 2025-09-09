/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon287IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon287Icon(props: Icon287IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.5"}
        d={
          "M8 2v3m8-3v3M3.5 9.09h17M13.37 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M11.995 13.7h.009m-3.709 0h.01m-.01 3h.01"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeMiterlimit={"10"}
        d={
          "M18.508 15.091a2.25 2.25 0 0 0-2.25 2.25v1.084c0 .229-.098.578-.214.773l-.431.716c-.266.442-.083.934.405 1.099 1.616.54 3.36.54 4.976 0a.75.75 0 0 0 .405-1.1l-.431-.715a1.84 1.84 0 0 1-.21-.773v-1.084a2.257 2.257 0 0 0-2.25-2.25Z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        d={"M19.201 15.2a2.53 2.53 0 0 0-1.387 0 .745.745 0 0 1 1.387 0"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={".5"}
        d={
          "M19.632 21.147c0 .62-.506 1.125-1.125 1.125a1.13 1.13 0 0 1-1.125-1.125"
        }
      ></path>
    </svg>
  );
}

export default Icon287Icon;
/* prettier-ignore-end */
