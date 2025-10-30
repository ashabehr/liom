/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon371IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon371Icon(props: Icon371IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      data-name={"Layer 1"}
      viewBox={"0 0 52 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26 2c3 0 5.43 3.29 8.09 4.42s6.82.51 8.84 2.65 1.51 6.07 2.65 8.84S50 23 50 26s-3.29 5.43-4.42 8.09-.51 6.82-2.65 8.84-6.07 1.53-8.84 2.65S29 50 26 50s-5.43-3.29-8.09-4.42-6.82-.51-8.84-2.65-1.53-6.07-2.65-8.84S2 29 2 26s3.29-5.43 4.42-8.09.51-6.82 2.65-8.84 6.07-1.53 8.84-2.65S23 2 26 2m0 7.58A16.42 16.42 0 1 0 42.42 26 16.47 16.47 0 0 0 26 9.58m7.62 9.15 1.61 1.52a1.25 1.25 0 0 1 0 1.51L25.08 33.07a2.07 2.07 0 0 1-1.61.7 2.23 2.23 0 0 1-1.61-.7l-5.49-5.47a1 1 0 0 1-.1-1.42l.1-.11L18 24.56a1.1 1.1 0 0 1 1.54-.07l.07.07 3.89 4 8.59-9.8a1.1 1.1 0 0 1 1.53-.03"
        }
      ></path>
    </svg>
  );
}

export default Icon371Icon;
/* prettier-ignore-end */
