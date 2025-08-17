/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon163IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon163Icon(props: Icon163IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#_p1RmvdjvNJBa)"}>
        <path
          d={
            "M12.5 25C5.596 25 0 19.404 0 12.5S5.596 0 12.5 0 25 5.596 25 12.5 19.404 25 12.5 25z"
          }
          stroke={"#6271FF"}
          strokeWidth={"5"}
        ></path>

        <rect
          x={"6.25"}
          y={"10.938"}
          width={"12.5"}
          height={"3.125"}
          rx={"1.563"}
          fill={"#6271FF"}
        ></rect>
      </g>

      <defs>
        <clipPath id={"_p1RmvdjvNJBa"}>
          <path fill={"#fff"} d={"M0 0h25v25H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon163Icon;
/* prettier-ignore-end */
