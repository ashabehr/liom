/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M10.575 3.085c-.205-.11-.635-.225-1.22.185l-.735.52c-.055-1.555-.73-2.165-2.37-2.165h-3C1.54 1.625.875 2.29.875 4v4c0 1.15.625 2.375 2.375 2.375h3c1.64 0 2.315-.61 2.37-2.165l.735.52c.31.22.58.29.795.29a.9.9 0 0 0 .425-.105c.205-.105.55-.39.55-1.105V4.19c0-.715-.345-1-.55-1.105M5.5 5.69a.94.94 0 0 1-.94-.94c0-.52.425-.94.94-.94s.94.42.94.94-.425.94-.94.94"
        }
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
