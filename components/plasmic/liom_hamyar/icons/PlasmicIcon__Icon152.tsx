/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon152IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon152Icon(props: Icon152IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 14.435c-.206 0-.406-.027-.573-.087C4.881 13.475.834 10.375.834 5.795c0-2.334 1.887-4.227 4.207-4.227 1.126 0 2.18.44 2.96 1.227a4.143 4.143 0 012.96-1.227c2.32 0 4.206 1.9 4.206 4.227 0 4.587-4.046 7.68-6.593 8.553-.167.06-.367.087-.573.087zM5.04 2.568c-1.766 0-3.206 1.447-3.206 3.227 0 4.553 4.38 7.087 5.92 7.613.12.04.38.04.5 0 1.533-.526 5.92-3.053 5.92-7.613 0-1.78-1.44-3.227-3.207-3.227a3.168 3.168 0 00-2.56 1.293c-.186.254-.613.254-.8 0a3.18 3.18 0 00-2.566-1.293z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon152Icon;
/* prettier-ignore-end */
