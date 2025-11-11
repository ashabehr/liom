/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon378IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon378Icon(props: Icon378IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 1024 1024"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96"
        }
      ></path>
    </svg>
  );
}

export default Icon378Icon;
/* prettier-ignore-end */
