/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpArrowSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpArrowSvgrepoComSvgIcon(props: UpArrowSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 511.735 511.735"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M508.788 371.087 263.455 125.753a10.623 10.623 0 0 0-15.04 0L2.975 371.087c-4.053 4.267-3.947 10.987.213 15.04a10.763 10.763 0 0 0 14.827 0l237.867-237.76 237.76 237.76c4.267 4.053 10.987 3.947 15.04-.213a10.663 10.663 0 0 0 .106-14.827"
        }
      ></path>
    </svg>
  );
}

export default UpArrowSvgrepoComSvgIcon;
/* prettier-ignore-end */
