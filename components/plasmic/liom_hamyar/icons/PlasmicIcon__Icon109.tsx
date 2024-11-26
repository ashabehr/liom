// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon109IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon109Icon(props: Icon109IconProps) {
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

      <g fillRule={"evenodd"} clipRule={"evenodd"} fill={"currentColor"}>
        <path
          d={
            "M3.885 5.237C3.205 5.868 2.75 6.893 2.75 8.5v7c0 1.607.455 2.631 1.135 3.263.69.64 1.73.987 3.115.987h10c1.385 0 2.425-.346 3.115-.987.68-.632 1.135-1.656 1.135-3.263v-7c0-1.607-.455-2.632-1.135-3.263-.69-.64-1.73-.987-3.115-.987H7c-1.385 0-2.425.346-3.115.987zm-1.02-1.1C3.925 3.155 5.385 2.75 7 2.75h10c1.615 0 3.075.404 4.135 1.388 1.07.994 1.615 2.469 1.615 4.362v7c0 1.893-.545 3.369-1.615 4.362-1.06.984-2.52 1.388-4.135 1.388H7c-1.615 0-3.075-.404-4.135-1.388-1.07-.993-1.615-2.469-1.615-4.362v-7c0-1.893.545-3.368 1.615-4.362z"
          }
        ></path>

        <path
          d={
            "M19.363 7.31a.75.75 0 01-.134 1.052L13.68 12.65a2.75 2.75 0 01-3.362 0L4.77 8.362a.75.75 0 11.918-1.187l5.547 4.287a1.25 1.25 0 001.528 0l5.547-4.287a.75.75 0 011.052.135z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon109Icon;
/* prettier-ignore-end */
