/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon312IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon312Icon(props: Icon312IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon flat-color"
      )}
      data-name={"Flat Color"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M16.17 7.78c-.89-1.33-2-3-3.3-5.28a1 1 0 0 0-1.74 0c-1.31 2.31-2.41 4-3.3 5.28C6 10.52 5 12 5 15a7 7 0 0 0 14 0c0-3-1-4.48-2.83-7.22"
        }
      ></path>
    </svg>
  );
}

export default Icon312Icon;
/* prettier-ignore-end */
