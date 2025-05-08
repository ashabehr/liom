/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon229IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon229Icon(props: Icon229IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 59.998 59.998"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M40.749 0h-21.5a1.5 1.5 0 00-1.5 1.5v56.998a1.5 1.5 0 001.5 1.5h21.5a1.5 1.5 0 001.5-1.5V1.5a1.5 1.5 0 00-1.5-1.5zm-20 56.998V3h18.5v1.998h-3.875a1.5 1.5 0 100 3h3.875v1h-9.25a1.5 1.5 0 100 3h9.25v1h-3.875a1.5 1.5 0 100 3h3.875v1h-9.25a1.5 1.5 0 100 3h9.25v1h-3.875a1.5 1.5 0 100 3h3.875v1h-9.25a1.5 1.5 0 100 3h9.25v1h-3.875a1.5 1.5 0 100 3h3.875v1h-9.25a1.5 1.5 0 100 3h9.25v1h-3.875a1.5 1.5 0 100 3h3.875v1h-9.25a1.5 1.5 0 100 3h9.25v1h-3.875a1.5 1.5 0 100 3h3.875v1h-9.25a1.5 1.5 0 100 3h9.25v1h-3.875a1.5 1.5 0 100 3h3.875v1h-18.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon229Icon;
/* prettier-ignore-end */
