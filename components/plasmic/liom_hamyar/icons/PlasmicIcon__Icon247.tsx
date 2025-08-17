/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon247IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon247Icon(props: Icon247IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.293 1.293a1 1 0 0 1 .325-.216 1 1 0 0 1 .764 0 1 1 0 0 1 .325.216l8 8a1 1 0 0 1-1.414 1.414L13 4.414V22a1 1 0 0 1-2 0V4.414l-6.293 6.293a1 1 0 0 1-1.414-1.414Z"
        }
      ></path>
    </svg>
  );
}

export default Icon247Icon;
/* prettier-ignore-end */
