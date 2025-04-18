/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon220IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon220Icon(props: Icon220IconProps) {
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
        d={
          "M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1zm-8.22 5.59l-2 2c-.07.07-.16.13-.25.16a.671.671 0 01-.56 0 .662.662 0 01-.22-.15c-.01-.01-.02-.01-.02-.02l-2-2a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.71.73v-4.19c0-.41.34-.75.75-.75s.75.34.75.75v4.19l.72-.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.43 8.81c.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon220Icon;
/* prettier-ignore-end */
