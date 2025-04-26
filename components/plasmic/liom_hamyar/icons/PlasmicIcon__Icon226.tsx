/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon226IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon226Icon(props: Icon226IconProps) {
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
        d={
          "M8.762 22.27h.13c4.44 0 6.58-1.75 6.95-5.67a.751.751 0 00-.68-.82c-.4-.04-.78.27-.82.68-.29 3.14-1.77 4.31-5.46 4.31h-.13c-4.07 0-5.51-1.44-5.51-5.51V8.74c0-4.07 1.44-5.51 5.51-5.51h.13c3.71 0 5.19 1.19 5.46 4.39a.759.759 0 001.51-.13c-.34-3.98-2.49-5.76-6.96-5.76h-.13c-4.91 0-7.01 2.1-7.01 7.01v6.52c0 4.91 2.1 7.01 7.01 7.01z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.002 12.75h11.38c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.002c-.41 0-.75.34-.75.75s.34.75.75.75z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.152 16.1c.19 0 .38-.07.53-.22l3.35-3.35a.754.754 0 000-1.06l-3.35-3.35a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.82 2.82-2.82 2.82c-.29.29-.29.77 0 1.06.14.15.34.22.53.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon226Icon;
/* prettier-ignore-end */
