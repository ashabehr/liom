/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon307IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon307Icon(props: Icon307IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M256 0C194.5 82.109 82.125 199.438 82.125 338.094 82.125 434.141 159.969 512 256 512s173.875-77.859 173.875-173.906C429.875 199.438 317.469 82.109 256 0"
        }
      ></path>
    </svg>
  );
}

export default Icon307Icon;
/* prettier-ignore-end */
