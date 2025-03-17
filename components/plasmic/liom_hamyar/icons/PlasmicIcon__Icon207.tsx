// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon207IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon207Icon(props: Icon207IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.353 8.95A7.511 7.511 0 018.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.597 13.354 13.354 0 010-6.1z"
        }
        stroke={"#0095FF"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={
          "M3.353 8.95a13.354 13.354 0 000 6.1 7.511 7.511 0 005.597 5.597c2.006.47 4.094.47 6.1 0a7.511 7.511 0 005.597-5.597c.47-2.006.47-4.094 0-6.1a7.511 7.511 0 00-5.597-5.597"
        }
        stroke={"#363853"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M7.85 8.87a.75.75 0 00-1.062 1.06L7.85 8.87zm.51 1.57l-.531.53a.75.75 0 001.06 0l-.53-.53zm2.61-1.55a.75.75 0 00-1.06-1.061l1.06 1.06zm2.07.28a.75.75 0 000 1.5v-1.5zm3.641 1.5a.75.75 0 100-1.5v1.5zm-8.832 3.4a.75.75 0 10-1.06 1.061l1.06-1.06zm.51 1.571l-.53.53a.75.75 0 001.06 0l-.53-.53zm2.61-1.55a.75.75 0 10-1.06-1.06l1.06 1.06zm2.071.28a.75.75 0 000 1.5v-1.5zm3.641 1.5a.75.75 0 100-1.5v1.5zM6.788 9.93l1.04 1.04L8.89 9.91 7.85 8.87 6.79 9.93zm2.101 1.04l2.08-2.08-1.06-1.061-2.08 2.08 1.06 1.061zm4.151-.3h3.641v-1.5h-3.64v1.5zm-6.252 4.46l1.04 1.04 1.061-1.06-1.04-1.04-1.06 1.06zm2.101 1.04l2.08-2.08-1.06-1.06-2.08 2.08 1.06 1.06zm4.151-.3h3.641v-1.5h-3.64v1.5z"
        }
        fill={"#0095FF"}
      ></path>
    </svg>
  );
}

export default Icon207Icon;
/* prettier-ignore-end */
