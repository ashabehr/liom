// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon136IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon136Icon(props: Icon136IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M450.207 317.793C450.207 425.05 363.256 512 256 512c-107.257 0-194.207-86.95-194.207-194.207C61.793 176.552 256 0 256 0s194.207 176.552 194.207 317.793z"
        }
        fill={"#d80027"}
      ></path>

      <path
        d={
          "M450.207 317.793C450.207 425.05 363.256 512 256 512V0s194.207 176.552 194.207 317.793z"
        }
        fill={"#a2001d"}
      ></path>

      <path
        fill={"#fff"}
        d={
          "M336.92 285.425h-48.552v-48.552h-64.736v48.552H175.08v64.736h48.552v48.551h64.736v-48.551h48.552z"
        }
      ></path>
    </svg>
  );
}

export default Icon136Icon;
/* prettier-ignore-end */
