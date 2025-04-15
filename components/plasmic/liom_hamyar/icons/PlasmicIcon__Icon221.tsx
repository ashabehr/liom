/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon221IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon221Icon(props: Icon221IconProps) {
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
        id={"mQ9IdGju98XKa"}
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

      <g mask={"url(#mQ9IdGju98XKa)"}>
        <path
          d={
            "M11.581 20.165c-4.731 0-8.583-3.852-8.583-8.583 0-4.732 3.852-8.584 8.583-8.584 4.732 0 8.584 3.852 8.584 8.584 0 4.731-3.852 8.583-8.584 8.583zm0-15.91c-4.045 0-7.327 3.29-7.327 7.327 0 4.036 3.282 7.327 7.327 7.327s7.328-3.291 7.328-7.327c0-4.037-3.283-7.328-7.328-7.328zm8.793 16.748a.621.621 0 01-.444-.184l-1.675-1.675a.631.631 0 010-.887.632.632 0 01.888 0l1.675 1.675a.632.632 0 010 .887.62.62 0 01-.444.184z"
          }
          fill={"#280056"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon221Icon;
/* prettier-ignore-end */
