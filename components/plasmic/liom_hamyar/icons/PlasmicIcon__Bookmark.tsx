/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarkIcon(props: BookmarkIconProps) {
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
          "M6.09 21.06a1 1 0 01-1-1L4.94 5.4a2.26 2.26 0 012.18-2.35L16.71 3a2.27 2.27 0 012.23 2.31l.14 14.66a1 1 0 01-.49.87 1 1 0 01-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 01-.51.15zm5.76-5.55a1.1 1.1 0 01.5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 01.51-.14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookmarkIcon;
/* prettier-ignore-end */
