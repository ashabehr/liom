/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M10 28c-1.6 0-3.2-1.4-4-2-4-2.8-5.2-3.8-6-4.4V30a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.4c-.8.6-2 1.6-6 4.4-.8.6-2.4 2-4 2m8-12H2a2 2 0 0 0-2 2v1c1.6 1.2 1.4 1.2 7.2 5.4.6.4 1.8 1.6 2.8 1.6s2.2-1.2 2.8-1.4c5.8-4.2 5.6-4.2 7.2-5.4V18a2 2 0 0 0-2-2m16-6H14a2 2 0 0 0-2 2v2h6a4.006 4.006 0 0 1 3.982 3.614L22 17.6V26h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2m-2 8h-4v-4h4zm-22-6c0-2.206 1.794-4 4-4h14V2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12h6z"
        }
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
