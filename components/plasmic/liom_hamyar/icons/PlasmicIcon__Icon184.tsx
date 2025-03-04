// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon184IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon184Icon(props: Icon184IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"KTAIcZegUWeca"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"20"}
        height={"20"}
      >
        <path fill={"#D9D9D9"} d={"M0 0h20v20H0z"}></path>
      </mask>

      <g mask={"url(#KTAIcZegUWeca)"}>
        <path
          d={"M2.5 5.833h15M5 10h10m-6.667 4.167h3.334"}
          stroke={"#757575"}
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon184Icon;
/* prettier-ignore-end */
