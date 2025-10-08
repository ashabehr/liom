/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon320IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon320Icon(props: Icon320IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon flat-color"
      )}
      data-name={"Flat Color"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m13 12 5.46-5.46a1 1 0 0 0 0-1.42l-2.88-2.83a1 1 0 0 0-1.41 0l-8.29 8.29a2 2 0 0 0 0 2.84l8.3 8.29a1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l2.82-2.83a1 1 0 0 0 0-1.42Z"
        }
      ></path>
    </svg>
  );
}

export default Icon320Icon;
/* prettier-ignore-end */
