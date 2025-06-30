/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon246IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon246Icon(props: Icon246IconProps) {
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

      <mask
        id={"a"}
        width={"24"}
        height={"24"}
        x={"0"}
        y={"0"}
        maskUnits={"userSpaceOnUse"}
        style={{
          maskType: 'alpha"',
        }}
      >
        <path fill={"currentColor"} d={"M24 0H0v24h24z"}></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          d={
            "M8.5 21.3v-4.825h-.075q-2.475-.125-4.2-1.825T2.5 10.5q0-2.524 1.738-4.263Q5.975 4.5 8.5 4.5h1.35L8.025 2.65l1.05-1.05 3.65 3.65-3.65 3.675-1.05-1.075L9.85 6H8.5Q6.625 6 5.312 7.312 4 8.625 4 10.5q0 1.9 1.4 3.2T8.725 15H10v2.675L12.675 15H15.5q1.875 0 3.188-1.312Q20 12.375 20 10.5t-1.312-3.188T15.5 6h-.4V4.5h.4q2.524 0 4.263 1.737Q21.5 7.976 21.5 10.5t-1.737 4.262T15.5 16.5h-2.2z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon246Icon;
/* prettier-ignore-end */
