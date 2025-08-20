/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JobSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JobSvgrepoCom1SvgIcon(props: JobSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon flat-line"
      )}
      data-name={"Flat Line"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"14"}
        height={"18"}
        x={"5"}
        y={"5"}
        fill={"#2ca9bc"}
        rx={"1"}
        transform={"rotate(90 12 14)"}
      ></rect>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M16 7H8V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm1 4H7m8 0v2m6 7V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1"
        }
      ></path>
    </svg>
  );
}

export default JobSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
