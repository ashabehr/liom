/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M18.459 19.745a.91.91 0 0 0 1.286-1.287zM14.554 8.186a6.367 6.367 0 0 1-6.368 6.368v1.819a8.186 8.186 0 0 0 8.187-8.187h-1.82zm-6.368 6.368A6.367 6.367 0 0 1 1.82 8.186H0a8.186 8.186 0 0 0 8.186 8.187v-1.82zM1.82 8.186A6.367 6.367 0 0 1 8.186 1.82V0A8.186 8.186 0 0 0 0 8.186zM8.186 1.82a6.367 6.367 0 0 1 6.368 6.367h1.819A8.186 8.186 0 0 0 8.186 0zm4.36 12.013 5.913 5.913 1.286-1.287-5.913-5.912z"
        }
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
