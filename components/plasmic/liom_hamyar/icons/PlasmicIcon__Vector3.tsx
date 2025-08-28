/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 31"}
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
        strokeWidth={"2"}
        d={
          "M1 12.2V9a3.2 3.2 0 0 1 3.2-3.2h1.3M1 12.2v14.4a3.2 3.2 0 0 0 3.2 3.2h17.6a3.2 3.2 0 0 0 3.2-3.2V12.2m-24 0h24m0 0V9a3.2 3.2 0 0 0-3.2-3.2h-2.05m0 0H5.5V1m14.25 4.8V1M6.6 18.6h12.8"
        }
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
