/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterOpenedSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterOpenedSvgrepoComSvgIcon(
  props: LetterOpenedSvgrepoComSvgIconProps
) {
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
          "M10 22h4c3.771 0 5.657 0 6.828-1.171C22 19.657 22 17.77 22 14s0-5.657-1.172-6.828c-.362-.363-.794-.613-1.328-.786v2.773c.003.34.009.911-.236 1.433-.244.522-.686.884-.95 1.1-.026.02-.051.041-.073.06l-1.507 1.255c-.86.718-1.61 1.342-2.284 1.776-.725.466-1.51.812-2.45.812-.94 0-1.724-.346-2.45-.813-.674-.433-1.423-1.057-2.284-1.774l-1.507-1.256a13.705 13.705 0 00-.073-.06c-.264-.216-.705-.578-.95-1.1-.244-.522-.24-1.093-.237-1.433l.001-.096V6.385c-.534.173-.966.424-1.328.787C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.829C4.343 22 6.229 22 10 22z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.72 10.6l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296l1.44-1.2c.353-.294.53-.442.625-.643.094-.202.094-.432.094-.893V7c0-.32 0-.62-.002-.898-.012-1.771-.098-2.737-.73-3.37C16.536 2 15.358 2 13 2h-2c-2.357 0-3.535 0-4.268.732-.632.633-.72 1.599-.732 3.37-.002.279 0 .577 0 .898v2.063c0 .46 0 .691.095.893.094.201.27.349.625.644zM9.25 6a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4A.75.75 0 019.25 6zm1 3a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LetterOpenedSvgrepoComSvgIcon;
/* prettier-ignore-end */
