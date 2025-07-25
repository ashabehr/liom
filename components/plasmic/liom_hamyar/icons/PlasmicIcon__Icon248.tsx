/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon248IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon248Icon(props: Icon248IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"24"}
        height={"24"}
        x={"0"}
        y={"0"}
        maskUnits={"userSpaceOnUse"}
        style={{
          maskType: 'alpha"',
        }}
      >
        <path fill={"#D9D9D9"} d={"M0 0h24v24H0z"}></path>
      </mask>

      <g fill={"#280056"} mask={"url(#a)"}>
        <path
          d={
            "M5.54 19.52c-.61 0-1.18-.21-1.59-.6-.52-.49-.77-1.23-.68-2.03l.37-3.24c.07-.61.44-1.42.87-1.86l8.21-8.69c2.05-2.17 4.19-2.23 6.36-.18s2.23 4.19.18 6.36l-8.21 8.69c-.42.45-1.2.87-1.81.97l-3.22.55c-.17.01-.32.03-.48.03M15.93 2.91c-.77 0-1.44.48-2.12 1.2l-8.21 8.7c-.2.21-.43.71-.47 1l-.37 3.24c-.04.33.04.6.22.77s.45.23.78.18l3.22-.55c.29-.05.77-.31.97-.52l8.21-8.69C19.4 6.92 19.85 5.7 18.04 4c-.8-.77-1.49-1.09-2.11-1.09"
          }
        ></path>

        <path
          d={
            "M17.34 10.949h-.07a6.86 6.86 0 0 1-6.11-5.78c-.06-.41.22-.79.63-.86.41-.06.79.22.86.63a5.37 5.37 0 0 0 4.78 4.52c.41.04.71.41.67.82-.05.38-.38.67-.76.67m3.66 11.8H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon248Icon;
/* prettier-ignore-end */
