/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon289IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon289Icon(props: Icon289IconProps) {
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
          "M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25M20 9.84c.55 0 1 .45 1 1V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.16c0-.55.45-1 1-1zM11.001 18c.05.205.134.405.247.555.195.285.471.445.751.445.46 0 .853-.415 1.002-.995l-.174.03c-.07.015-.145.02-.22.03q-.298.039-.601.04a5 5 0 0 1-.863-.08c-.05-.01-.096-.015-.142-.025m1.097-6.167c-.44 0-.836.212-1.045.545-.787.348-1.331 1.068-1.331 1.9v.906c0 .147-.077.398-.161.527l-.408.598c-.16.24-.198.505-.097.749.096.24.327.427.626.516.782.237 1.606.35 2.428.35.823 0 1.647-.114 2.43-.347a.93.93 0 0 0 .604-.52.77.77 0 0 0-.08-.748l-.404-.595a1.2 1.2 0 0 1-.162-.53v-.907c0-.842-.556-1.57-1.36-1.91-.21-.33-.597-.534-1.04-.534"
        }
      ></path>
    </svg>
  );
}

export default Icon289Icon;
/* prettier-ignore-end */
