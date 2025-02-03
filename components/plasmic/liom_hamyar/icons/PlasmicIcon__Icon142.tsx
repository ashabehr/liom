// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon142IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon142Icon(props: Icon142IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-0.5 0 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12 21.5A9.25 9.25 0 1012 3a9.25 9.25 0 000 18.5z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.93 8.15a.92.92 0 01-.93.9.9.9 0 11.93-.9zm-1.64 8.38v-5.38a.7.7 0 01.71-.72.689.689 0 01.69.72v5.38a.701.701 0 01-1.4 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon142Icon;
/* prettier-ignore-end */
