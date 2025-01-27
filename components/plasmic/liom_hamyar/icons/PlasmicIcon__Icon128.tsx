// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon128IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon128Icon(props: Icon128IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.078 12.622V5.977c0-.583-.472-1.055-1.055-1.055h-6.645L18.744.307a1.055 1.055 0 00-1.488 0l-4.634 4.615H5.977c-.583 0-1.055.472-1.055 1.055v6.645L.307 17.256a1.055 1.055 0 000 1.488l4.615 4.634v6.645c0 .583.472 1.055 1.055 1.055h6.645l4.634 4.615a1.052 1.052 0 001.488 0l4.634-4.615h6.645c.583 0 1.055-.472 1.055-1.055v-6.645l4.615-4.634c.41-.411.41-1.077 0-1.488l-4.615-4.634z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon128Icon;
/* prettier-ignore-end */
