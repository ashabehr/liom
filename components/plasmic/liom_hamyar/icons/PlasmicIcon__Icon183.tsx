/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon183IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon183Icon(props: Icon183IconProps) {
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
          "M9 17.75c-.1 0-.19-.02-.29-.06a.74.74 0 01-.46-.69v-6c0-.41.34-.75.75-.75s.75.34.75.75v4.19l.72-.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2c-.14.14-.34.22-.53.22z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9 17.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22 10.75h-4c-3.42 0-4.75-1.33-4.75-4.75V2c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8a.751.751 0 01-.53 1.28zm-7.25-6.94V6c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon183Icon;
/* prettier-ignore-end */
