/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon275IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon275Icon(props: Icon275IconProps) {
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

      <path
        fill={"currentColor"}
        d={
          "M18.8 9.91c-1.13 0-2.14.55-2.77 1.39a3.47 3.47 0 0 0-2.77-1.39c-1.91 0-3.46 1.56-3.46 3.48 0 .74.12 1.43.32 2.06.98 3.11 4.02 4.98 5.52 5.49.21.07.56.07.77 0 1.5-.51 4.54-2.37 5.52-5.49.21-.64.32-1.32.32-2.06a3.457 3.457 0 0 0-3.45-3.48"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M20.75 8.34c0 .23-.23.38-.45.32a4.81 4.81 0 0 0-3.95.74c-.22.16-.52.16-.73 0a4.65 4.65 0 0 0-2.76-.9c-2.58 0-4.68 2.11-4.68 4.71 0 2.82 1.35 4.93 2.71 6.34.07.07.01.19-.08.15C8.08 18.77 2 14.91 2 8.34 2 5.44 4.33 3.1 7.21 3.1c1.71 0 3.22.82 4.17 2.09a5.22 5.22 0 0 1 4.17-2.09c2.87 0 5.2 2.34 5.2 5.24"
        }
      ></path>
    </svg>
  );
}

export default Icon275Icon;
/* prettier-ignore-end */
