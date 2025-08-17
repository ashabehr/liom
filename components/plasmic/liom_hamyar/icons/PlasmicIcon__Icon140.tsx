/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon140IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon140Icon(props: Icon140IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className, "icon glyph")}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.25 17.55L14.63 3.71a3 3 0 00-5.26 0L1.75 17.55A3 3 0 004.38 22h15.24a3 3 0 002.63-4.45zM12 18a1 1 0 111-1 1 1 0 01-1 1zm1-5a1 1 0 01-2 0V9a1 1 0 012 0z"
        }
      ></path>
    </svg>
  );
}

export default Icon140Icon;
/* prettier-ignore-end */
