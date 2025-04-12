/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon218IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon218Icon(props: Icon218IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 11.71a5.45 5.45 0 01-5.442-5.443C3.558 3.267 6 .825 9 .825s5.442 2.442 5.442 5.442S12.001 11.71 9 11.71zm0-9.465a4.032 4.032 0 00-4.022 4.022A4.032 4.032 0 009 10.29a4.032 4.032 0 004.023-4.023A4.032 4.032 0 009 2.245zm8.13 18.93a.715.715 0 01-.71-.71c0-3.266-3.331-5.916-7.42-5.916s-7.42 2.65-7.42 5.916c0 .388-.322.71-.71.71a.715.715 0 01-.71-.71c0-4.042 3.966-7.335 8.84-7.335s8.84 3.293 8.84 7.335c0 .388-.322.71-.71.71z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon218Icon;
/* prettier-ignore-end */
