/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon245IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon245Icon(props: Icon245IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      version={"1.1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <mask
          id={"a"}
          width={"24"}
          height={"24"}
          x={"0"}
          y={"0"}
          maskUnits={"userSpaceOnUse"}
        >
          <path fill={"currentColor"} d={"M0 0h24v24H0z"}></path>
        </mask>
      </defs>

      <g mask={"url(#a)"}>
        <path
          fill={"none"}
          d={
            "M8.5 21.3v-4.8c-1.7 0-3.1-.7-4.2-1.8s-1.7-2.5-1.7-4.1.6-3.1 1.7-4.3c1.2-1.2 2.6-1.7 4.3-1.7H10L8.2 2.7l1.1-1L13 5.4 9.3 9.1 8.2 8 10 6.2H8.6c-1.2 0-2.3.4-3.2 1.3s-1.3 1.9-1.3 3.2.5 2.3 1.4 3.2 2 1.3 3.3 1.3h1.3v2.7l2.7-2.7h2.8c1.2 0 2.3-.4 3.2-1.3s1.3-1.9 1.3-3.2-.4-2.3-1.3-3.2-1.9-1.3-3.2-1.3h-.4V4.7h.4c1.7 0 3.1.6 4.3 1.7 1.2 1.2 1.7 2.6 1.7 4.3s-.6 3.1-1.7 4.3c-1.2 1.2-2.6 1.7-4.3 1.7h-2.2l-4.8 4.8Z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon245Icon;
/* prettier-ignore-end */
