/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon147IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon147Icon(props: Icon147IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.484 10a2.98 2.98 0 01-2.983 2.983A2.98 2.98 0 017.518 10 2.98 2.98 0 0110.5 7.017 2.98 2.98 0 0113.484 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.25"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.5 16.892c2.941 0 5.683-1.734 7.591-4.734.75-1.175.75-3.15 0-4.325-1.908-3-4.65-4.733-7.591-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.25"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon147Icon;
/* prettier-ignore-end */
