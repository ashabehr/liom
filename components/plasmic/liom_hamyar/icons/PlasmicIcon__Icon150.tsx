/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon150IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon150Icon(props: Icon150IconProps) {
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

      <mask
        id={"NUjP34GGW_rGa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"17"}
        height={"16"}
      >
        <path fill={"#D9D9D9"} d={"M.5 0h16v16H.5z"}></path>
      </mask>

      <g mask={"url(#NUjP34GGW_rGa)"} fill={"#8F8F8F"}>
        <path
          d={
            "M8.5 15.207c-.46 0-.893-.234-1.2-.64l-1-1.334a.314.314 0 00-.133-.066h-.333c-2.78 0-4.5-.754-4.5-4.5V5.333c0-2.946 1.553-4.5 4.5-4.5h5.333c2.947 0 4.5 1.554 4.5 4.5v3.334c0 2.946-1.553 4.5-4.5 4.5h-.333c-.053 0-.1.026-.133.066l-1 1.334c-.307.406-.74.64-1.2.64zM5.835 1.833c-2.387 0-3.5 1.114-3.5 3.5v3.334c0 3.013 1.033 3.5 3.5 3.5h.333c.34 0 .727.193.934.466l1 1.334c.233.306.566.306.8 0l1-1.334c.22-.293.566-.466.933-.466h.333c2.387 0 3.5-1.114 3.5-3.5V5.333c0-2.386-1.113-3.5-3.5-3.5H5.834z"
          }
        ></path>

        <path
          d={
            "M8.5 8a.664.664 0 01-.667-.667c0-.366.3-.666.666-.666.367 0 .667.3.667.666A.664.664 0 018.499 8zm2.666 0a.664.664 0 01-.667-.667c0-.366.3-.666.667-.666.367 0 .667.3.667.666a.664.664 0 01-.667.667zM5.833 8a.664.664 0 01-.667-.667c0-.366.3-.666.667-.666.366 0 .666.3.666.666A.664.664 0 015.833 8z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon150Icon;
/* prettier-ignore-end */
