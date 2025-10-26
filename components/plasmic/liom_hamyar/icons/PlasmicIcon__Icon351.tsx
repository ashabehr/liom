/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon351IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon351Icon(props: Icon351IconProps) {
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
          "M18.009 14.212c-1.38 0-2.5 1.121-2.5 2.5v1.205c0 .254-.109.641-.238.858l-.479.796c-.296.491-.092 1.037.45 1.22 1.796.6 3.733.6 5.53 0a.834.834 0 0 0 .45-1.22l-.48-.796a2.05 2.05 0 0 1-.233-.858v-1.205c0-1.375-1.125-2.5-2.5-2.5Z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        d={"M18.78 14.333a2.8 2.8 0 0 0-1.542 0 .827.827 0 0 1 1.542 0"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        d={
          "M19.258 20.942c0 .687-.563 1.25-1.25 1.25a1.254 1.254 0 0 1-1.25-1.25"
        }
      ></path>
    </svg>
  );
}

export default Icon351Icon;
/* prettier-ignore-end */
