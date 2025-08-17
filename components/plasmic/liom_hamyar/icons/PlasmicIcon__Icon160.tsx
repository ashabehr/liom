/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon160IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon160Icon(props: Icon160IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10 14.75c.217 0 .396-.07.538-.212A.731.731 0 0010.75 14V9.725c0-.2-.07-.371-.212-.513A.731.731 0 0010 9a.728.728 0 00-.75.75v4.275a.728.728 0 00.75.725zm0-7.45a.76.76 0 00.575-.238.82.82 0 00.225-.587.792.792 0 00-.8-.8.792.792 0 00-.8.8.82.82 0 00.225.587c.15.159.342.238.575.238zm0 12.2a9.263 9.263 0 01-3.712-.75 9.58 9.58 0 01-3.013-2.025 9.58 9.58 0 01-2.025-3.013A9.263 9.263 0 01.5 10c0-1.317.25-2.554.75-3.713a9.583 9.583 0 012.025-3.012A9.58 9.58 0 016.288 1.25 9.263 9.263 0 0110 .5a9.27 9.27 0 013.713.75 9.583 9.583 0 013.012 2.025 9.583 9.583 0 012.025 3.012A9.27 9.27 0 0119.5 10c0 1.317-.25 2.554-.75 3.712a9.58 9.58 0 01-2.025 3.013 9.583 9.583 0 01-3.012 2.025A9.27 9.27 0 0110 19.5zm0-1.5c2.217 0 4.104-.779 5.663-2.337C17.221 14.104 18 12.217 18 10s-.779-4.104-2.337-5.663C14.104 2.779 12.217 2 10 2s-4.104.779-5.662 2.337C2.779 5.896 2 7.783 2 10s.78 4.104 2.338 5.663C5.896 17.221 7.783 18 10 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon160Icon;
/* prettier-ignore-end */
