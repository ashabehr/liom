/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon137IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon137Icon(props: Icon137IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 152 200"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M151.862 124.138C151.862 166.035 117.897 200 76 200 34.103 200 .138 166.035.138 124.138.138 68.966 76 0 76 0s75.862 68.966 75.862 124.138z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon137Icon;
/* prettier-ignore-end */
