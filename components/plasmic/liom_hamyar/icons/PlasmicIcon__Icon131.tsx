/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon131IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon131Icon(props: Icon131IconProps) {
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

      <g fill={"currentColor"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M21 8a3 3 0 00-3-3h-8a3 3 0 00-3 3v12a3 3 0 003 3h8a3 3 0 003-3V8zm-2 0a1 1 0 00-1-1h-8a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V8z"
          }
        ></path>

        <path
          d={"M6 3h10a1 1 0 100-2H6a3 3 0 00-3 3v14a1 1 0 102 0V4a1 1 0 011-1z"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon131Icon;
/* prettier-ignore-end */
