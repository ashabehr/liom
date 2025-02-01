// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon139IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon139Icon(props: Icon139IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 152 200"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M144.362 124.138c0 37.755-30.607 68.362-68.362 68.362-37.755 0-68.362-30.607-68.362-68.362 0-12.17 4.216-25.628 11.062-39.318 6.81-13.62 15.97-26.976 25.266-38.807 9.28-11.81 18.577-21.954 25.562-29.151A359.185 359.185 0 0176 10.357a358.824 358.824 0 016.472 6.503c6.985 7.198 16.283 17.343 25.562 29.152C117.33 57.844 126.491 71.2 133.3 84.82c6.846 13.69 11.062 27.148 11.062 39.318z"
        }
        stroke={"currentColor"}
        strokeWidth={"15"}
      ></path>
    </svg>
  );
}

export default Icon139Icon;
/* prettier-ignore-end */
