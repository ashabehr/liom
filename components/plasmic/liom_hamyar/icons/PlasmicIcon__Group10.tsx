/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8 1.333C4.327 1.333 1.333 4.327 1.333 8S4.327 14.667 8 14.667 14.667 11.673 14.667 8 11.673 1.333 8 1.333m2.9 9.047a.497.497 0 0 1-.687.173L8.147 9.32c-.514-.307-.894-.98-.894-1.573V5.013c0-.273.227-.5.5-.5.274 0 .5.227.5.5v2.734c0 .24.2.593.407.713l2.067 1.233c.24.14.32.447.173.687"
        }
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
