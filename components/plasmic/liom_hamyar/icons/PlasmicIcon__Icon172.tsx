// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon172IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon172Icon(props: Icon172IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.8 12.5a.485.485 0 01-.5-.5v-2c0-.6-.21-1.111-.633-1.533a2.089 2.089 0 00-1.534-.634H4.6l2.234 2.234c.088.088.133.2.133.333a.48.48 0 01-.15.35.48.48 0 01-.7 0l-3-3a.54.54 0 01-.125-.192.614.614 0 01.125-.641L6.134 3.9a.452.452 0 01.333-.133c.133 0 .25.05.35.15a.48.48 0 010 .7L4.6 6.833h6.534c.877 0 1.624.308 2.24.925A3.05 3.05 0 0114.3 10v2a.487.487 0 01-.141.359.488.488 0 01-.359.14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon172Icon;
/* prettier-ignore-end */
