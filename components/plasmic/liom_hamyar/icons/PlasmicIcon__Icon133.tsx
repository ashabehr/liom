/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon133IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon133Icon(props: Icon133IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 512c-104.509 0-189.535-85.025-189.535-189.535 0-85.316 122.967-251.917 174.646-315.388 7.683-9.435 22.104-9.423 29.778 0 51.679 63.471 174.646 229.92 174.646 315.388C445.535 426.975 360.509 512 256 512z"
        }
        fill={"#ff5e5b"}
      ></path>

      <path
        d={
          "M126.982 322.465c0-6.528 1.773-21.673 13.646-49.772 9.875-23.37 45.257-8.448 35.372 14.947-10.483 24.809-10.618 34.728-10.618 34.825-.034 25.713-38.4 25.349-38.4 0zM270.889 7.077A19.203 19.203 0 00255.996 0v512H256c104.509 0 189.535-85.025 189.535-189.535 0-85.316-122.987-251.95-174.646-315.388z"
        }
        fill={"#ff423d"}
      ></path>
    </svg>
  );
}

export default Icon133Icon;
/* prettier-ignore-end */
