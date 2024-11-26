// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon110IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon110Icon(props: Icon110IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 35 35"}
      data-name={"Layer 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.5 16.383a8.067 8.067 0 118.067-8.067 8.076 8.076 0 01-8.067 8.067zm0-13.633a5.567 5.567 0 105.567 5.566A5.573 5.573 0 0017.5 2.75zm13.977 32a1.25 1.25 0 01-1.23-1.037A12.663 12.663 0 0017.5 22.852 12.663 12.663 0 004.753 33.713a1.25 1.25 0 01-2.464-.426A15.1 15.1 0 0117.5 20.352a15.1 15.1 0 0115.211 12.935 1.25 1.25 0 01-1.02 1.444 1.2 1.2 0 01-.214.019z"
        }
      ></path>
    </svg>
  );
}

export default Icon110Icon;
/* prettier-ignore-end */
