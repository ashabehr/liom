/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpArrowOutboxSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function UpArrowOutboxSvgrepoComSvgIcon(
  props: UpArrowOutboxSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512.01 512.01"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M505.755 358.256 271.088 123.589c-8.341-8.341-21.824-8.341-30.165 0L6.256 358.256c-8.341 8.341-8.341 21.824 0 30.165s21.824 8.341 30.165 0l219.584-219.584 219.584 219.584a21.28 21.28 0 0 0 15.083 6.251 21.28 21.28 0 0 0 15.083-6.251c8.341-8.341 8.341-21.824 0-30.165"
        }
      ></path>
    </svg>
  );
}

export default UpArrowOutboxSvgrepoComSvgIcon;
/* prettier-ignore-end */
