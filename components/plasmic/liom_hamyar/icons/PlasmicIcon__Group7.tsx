/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M0 2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M0 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m2.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
        }
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
