/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriangleLeftSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriangleLeftSvgrepoComSvgIcon(
  props: TriangleLeftSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"m10.44 2 .56.413v11.194l-.54.393L5 8.373v-.827z"}></path>
    </svg>
  );
}

export default TriangleLeftSvgrepoComSvgIcon;
/* prettier-ignore-end */
