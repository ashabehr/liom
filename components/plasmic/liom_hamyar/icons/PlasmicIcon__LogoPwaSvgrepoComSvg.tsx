/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoPwaSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoPwaSvgrepoComSvgIcon(props: LogoPwaSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07-28.63-56.53-25.9 79.46 26.3 45h50.7l36.68-111.27 35 111.27zM48.79 286.09h31.65a93.39 93.39 0 0025.62-3.21l8.18-25.19 22.88-70.39a55.75 55.75 0 00-6-7.82Q113.54 160 79.59 160H0v192h48.79zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92zm286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160 512 352h-53.53l-12.4-34.39z"
        }
      ></path>
    </svg>
  );
}

export default LogoPwaSvgrepoComSvgIcon;
/* prettier-ignore-end */
