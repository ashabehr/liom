// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon204IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon204Icon(props: Icon204IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 12.29V2.71c0-1.33.77-1.65 1.71-.71L5.3 4.59c.39.39 1.03.39 1.41 0L10.29 1a.996.996 0 011.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L19.29 2c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H6c-2.76-.01-5-2.25-5-5.01z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon204Icon;
/* prettier-ignore-end */
