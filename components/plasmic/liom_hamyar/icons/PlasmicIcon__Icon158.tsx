// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon158IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon158Icon(props: Icon158IconProps) {
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
        id={"GS1h7Sry8uboa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"24"}
        height={"24"}
      >
        <path fill={"#D9D9D9"} d={"M0 0h24v24H0z"}></path>
      </mask>

      <g mask={"url(#GS1h7Sry8uboa)"}>
        <path
          d={
            "M12 16.75c.217 0 .396-.07.538-.212A.731.731 0 0012.75 16v-4.275c0-.2-.07-.371-.212-.513A.731.731 0 0012 11a.728.728 0 00-.75.75v4.275a.728.728 0 00.75.725zm0-7.45a.76.76 0 00.575-.238.82.82 0 00.225-.587.792.792 0 00-.8-.8.792.792 0 00-.8.8.82.82 0 00.225.587c.15.159.342.238.575.238zm0 12.2a9.263 9.263 0 01-3.712-.75 9.58 9.58 0 01-3.013-2.025 9.58 9.58 0 01-2.025-3.013A9.263 9.263 0 012.5 12c0-1.317.25-2.554.75-3.713a9.583 9.583 0 012.025-3.012A9.58 9.58 0 018.288 3.25 9.263 9.263 0 0112 2.5a9.27 9.27 0 013.713.75 9.583 9.583 0 013.012 2.025 9.583 9.583 0 012.025 3.012A9.27 9.27 0 0121.5 12c0 1.317-.25 2.554-.75 3.712a9.58 9.58 0 01-2.025 3.013 9.583 9.583 0 01-3.012 2.025A9.27 9.27 0 0112 21.5zm0-1.5c2.217 0 4.104-.779 5.663-2.337C19.221 16.104 20 14.217 20 12s-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.221 9.783 20 12 20z"
          }
          fill={"#280056"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon158Icon;
/* prettier-ignore-end */
