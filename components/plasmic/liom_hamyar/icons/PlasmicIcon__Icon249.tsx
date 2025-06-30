/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon249IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon249Icon(props: Icon249IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.34 6.949h-.07a6.86 6.86 0 0 1-6.11-5.78c-.06-.41.22-.79.63-.86.41-.06.79.22.86.63a5.37 5.37 0 0 0 4.78 4.52c.41.04.71.41.67.82-.05.38-.38.67-.76.67m3.66 11.8H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ></path>
    </svg>
  );
}

export default Icon249Icon;
/* prettier-ignore-end */
