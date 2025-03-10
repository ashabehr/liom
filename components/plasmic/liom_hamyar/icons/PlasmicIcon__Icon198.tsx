// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon198IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon198Icon(props: Icon198IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeWidth={"2"}>
        <path
          d={"M9 12h6m-3-3v6"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>

        <path
          d={"M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9z"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon198Icon;
/* prettier-ignore-end */
