/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon350IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon350Icon(props: Icon350IconProps) {
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

      <path
        fill={"currentColor"}
        d={
          "M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25M20 9.84c.55 0 1 .45 1 1V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.16c0-.55.45-1 1-1zm-9.176 8.494c.059.17.159.337.292.462.23.237.554.37.883.371.542 0 1.005-.346 1.18-.83q-.106.014-.204.025c-.084.013-.172.017-.26.026a8 8 0 0 1-1.428 0q-.151-.014-.296-.034zm1.173-7.5c-.454 0-.863.245-1.08.633a2.47 2.47 0 0 0-1.375 2.208v1.054c0 .171-.079.463-.166.613l-.42.696a1 1 0 0 0-.102.87c.1.28.339.497.647.6a7.8 7.8 0 0 0 2.508.409c.85 0 1.7-.134 2.509-.404a1 1 0 0 0 .625-.605.99.99 0 0 0-.083-.87l-.417-.692a1.55 1.55 0 0 1-.167-.617v-1.054a2.46 2.46 0 0 0-1.405-2.22 1.22 1.22 0 0 0-1.074-.621"
        }
      ></path>
    </svg>
  );
}

export default Icon350Icon;
/* prettier-ignore-end */
