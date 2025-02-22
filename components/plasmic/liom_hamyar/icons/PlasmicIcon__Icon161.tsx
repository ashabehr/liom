// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon161IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon161Icon(props: Icon161IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.5 10.5H7a1.5 1.5 0 000 3h3.5V17a1.5 1.5 0 003 0v-3.5H17a1.5 1.5 0 000-3h-3.5V7a1.5 1.5 0 00-3 0v3.5zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon161Icon;
/* prettier-ignore-end */
