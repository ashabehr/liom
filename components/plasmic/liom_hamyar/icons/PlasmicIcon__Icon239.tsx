/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon239IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon239Icon(props: Icon239IconProps) {
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
        fill={"currentColor"}
        d={
          "M16.498 18.25h-1.51c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.51c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-1.5a.75.75 0 1 1 0-1.5h1.5c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25M9 18.25H7.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75H9c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ></path>
    </svg>
  );
}

export default Icon239Icon;
/* prettier-ignore-end */
