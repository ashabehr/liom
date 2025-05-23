/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon230IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon230Icon(props: Icon230IconProps) {
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
          "M14 22.75h-4c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-4-20C5.39 2.75 3.75 4.39 3.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.07 12.54c-.18 0-.36-.07-.5-.19a3.875 3.875 0 00-5.14 0c-.16.15-.38.21-.61.18a.748.748 0 01-.53-.35l-2.18-3.5a.763.763 0 01.14-.96 8.666 8.666 0 0111.5 0c.27.24.33.65.14.96l-2.18 3.5a.78.78 0 01-.53.35c-.04 0-.08.01-.11.01zM12 9.87c1 0 1.99.28 2.86.83l1.4-2.25c-2.53-1.88-6-1.88-8.53 0l1.4 2.25c.88-.56 1.87-.83 2.87-.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon230Icon;
/* prettier-ignore-end */
