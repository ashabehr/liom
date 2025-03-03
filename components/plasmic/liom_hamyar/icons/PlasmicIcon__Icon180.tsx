// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon180IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon180Icon(props: Icon180IconProps) {
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
        id={"71tKU5Bk906oa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"24"}
        height={"24"}
      >
        <path fill={"#D9D9D9"} d={"M0 0h24v24H0z"}></path>
      </mask>

      <g mask={"url(#71tKU5Bk906oa)"}>
        <path
          d={
            "M15.5 12.2l1.8 1.8v1.5h-4.55V21l-.75.75-.75-.75v-5.5H6.7V14l1.8-1.8V5h-1V3.5h9V5h-1v7.2zM8.85 14h6.3L14 12.85V5h-4v7.85L8.85 14z"
          }
          fill={"#280056"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon180Icon;
/* prettier-ignore-end */
