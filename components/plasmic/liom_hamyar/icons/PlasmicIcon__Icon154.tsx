// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon154IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon154Icon(props: Icon154IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-1 0 26 26"}
      version={"1.1"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19 24a3 3 0 110-6 3 3 0 010 6zM5 16a3 3 0 110-6 3 3 0 010 6zM19 2a3 3 0 110 6 3 3 0 010-6zm0 14c-1.77 0-3.315.925-4.204 2.312l-5.355-3.06c.346-.68.559-1.438.559-2.252 0-.503-.097-.979-.235-1.437l5.571-3.183A4.97 4.97 0 0019 10a5 5 0 005-5 5 5 0 00-5-5 5 5 0 00-5 5c0 .503.097.979.235 1.438L8.664 9.62A4.973 4.973 0 005 8a5 5 0 00-5 5 5 5 0 005 5c1.14 0 2.179-.396 3.02-1.038L8 17l6.055 3.46c-.02.18-.055.354-.055.54a5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon154Icon;
/* prettier-ignore-end */
