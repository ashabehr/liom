/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon367IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon367Icon(props: Icon367IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M.75 9.08c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4C1.28 5.77.75 5.34.75 4.12c0-1.12.87-2.03 1.94-2.03H5.2c1.23 0 2.22 1.04 2.22 2.33M4.078.75v12"
        }
      ></path>
    </svg>
  );
}

export default Icon367Icon;
/* prettier-ignore-end */
