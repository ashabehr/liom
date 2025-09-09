/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon284IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon284Icon(props: Icon284IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3"}
      ></path>
    </svg>
  );
}

export default Icon284Icon;
/* prettier-ignore-end */
