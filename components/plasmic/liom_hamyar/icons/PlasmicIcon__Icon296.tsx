/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon296IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon296Icon(props: Icon296IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"#000"}
      version={"1.1"}
      viewBox={"0 0 290.658 290.658"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#030303"} d={"M0 139.474h290.658v11.711H0z"}></path>
    </svg>
  );
}

export default Icon296Icon;
/* prettier-ignore-end */
