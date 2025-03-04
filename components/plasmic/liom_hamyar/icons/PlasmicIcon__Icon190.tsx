// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon190IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon190Icon(props: Icon190IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 43"}
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
          "M14.5 27C21.404 27 27 21.404 27 14.5S21.404 2 14.5 2 2 7.596 2 14.5 7.596 27 14.5 27zm0 2C22.508 29 29 22.508 29 14.5S22.508 0 14.5 0 0 6.492 0 14.5 6.492 29 14.5 29z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M15 27a1 1 0 011 1v14a1 1 0 11-2 0V28a1 1 0 011-1z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M7 35a1 1 0 011-1h14a1 1 0 110 2H8a1 1 0 01-1-1z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon190Icon;
/* prettier-ignore-end */
