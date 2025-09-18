/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon299IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon299Icon(props: Icon299IconProps) {
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
        d={"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"}
      ></path>
    </svg>
  );
}

export default Icon299Icon;
/* prettier-ignore-end */
