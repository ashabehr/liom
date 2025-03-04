// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon185IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon185Icon(props: Icon185IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1h16M6.769 6H17M1 6h2.658M1 11h16"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Icon185Icon;
/* prettier-ignore-end */
