// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon121IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon121Icon(props: Icon121IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"19. Send"}>
        <path
          d={
            "M21 16.6a3 3 0 01-1.66-.51l-4.89-3.26a1 1 0 011.1-1.66l4.9 3.26a1 1 0 001.1 0l4.9-3.26a1 1 0 011.1 1.66l-4.89 3.26a3 3 0 01-1.66.51z"
          }
          fill={"#04009a"}
        ></path>

        <path
          d={
            "M29 25H13a3 3 0 01-3-3V10a3 3 0 013-3h16a3 3 0 013 3v12a3 3 0 01-3 3zM13 9a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V10a1 1 0 00-1-1z"
          }
          fill={"#04009a"}
        ></path>

        <path
          d={
            "M7 19H5a1 1 0 010-2h2a1 1 0 010 2zm0-4H3a1 1 0 010-2h4a1 1 0 010 2zm0-4H1a1 1 0 010-2h6a1 1 0 010 2z"
          }
          fill={"#77acf1"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon121Icon;
/* prettier-ignore-end */
