/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon199IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon199Icon(props: Icon199IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 .667a1 1 0 011 1v.335a5 5 0 014.933 4.558c.02.22.02.47.02.837v1.631c0 5.16-3.926 9.401-8.953 9.903v2.736a5.667 5.667 0 005.666 5.666h1.177a4.49 4.49 0 003.898-2.259 5.002 5.002 0 011.592-9.74 5 5 0 01.516 9.973 6.492 6.492 0 01-6.006 4.026h-1.177A7.667 7.667 0 0110 21.667v-2.734C4.762 18.43.667 14.017.667 8.647v-1.25c0-.367 0-.617.019-.837a5 5 0 014.54-4.54A9.17 9.17 0 016 2v-.333a1 1 0 112 0v2.666a1 1 0 11-2 0V4a7.65 7.65 0 00-.598.012 3 3 0 00-2.724 2.724c-.01.12-.011.275-.011.713v1.198A8.333 8.333 0 0011 16.98a7.952 7.952 0 007.952-7.952V7.449a9.57 9.57 0 00-.011-.713A3 3 0 0016 4.002v.331a1 1 0 11-2 0V1.667a1 1 0 011-1zm6.333 19.666a3 3 0 116 0 3 3 0 01-6 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon199Icon;
/* prettier-ignore-end */
