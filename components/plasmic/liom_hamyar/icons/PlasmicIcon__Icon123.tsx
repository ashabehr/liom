// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon123IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon123Icon(props: Icon123IconProps) {
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
        d={
          "M16.205 5.265l-6.49 2.164h0c-1.634.544-2.45.816-2.776 1.129a2 2 0 000 2.884c.325.313 1.142.585 2.775 1.13h0c.33.11.494.164.64.241a2 2 0 01.833.833c.077.146.132.31.242.64.544 1.633.816 2.45 1.129 2.775a2 2 0 002.884 0c.313-.325.585-1.142 1.13-2.775h0l2.163-6.491c.552-1.656.828-2.484.391-2.921-.437-.437-1.265-.161-2.92.39z"
        }
        fill={"#7444BC"}
        stroke={"#fff"}
      ></path>
    </svg>
  );
}

export default Icon123Icon;
/* prettier-ignore-end */
