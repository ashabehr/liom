/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon243IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon243Icon(props: Icon243IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"24"}
        height={"26"}
        x={"0"}
        y={"0"}
        maskUnits={"userSpaceOnUse"}
        style={{
          maskType: 'alpha"',
        }}
      >
        <path fill={"#D9D9D9"} d={"M0 0h24v25.2H0z"}></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"#280056"}
          d={
            "m15.5 12.81 1.8 1.89v1.575h-4.55v5.775l-.75.787-.75-.787v-5.775H6.7V14.7l1.8-1.89V5.25h-1V3.675h9V5.25h-1z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon243Icon;
/* prettier-ignore-end */
