/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon106IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon106Icon(props: Icon106IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 21a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm8.774-12.9c1.61-1.616 1.541-3.738.339-5.038A3.31 3.31 0 0018.748 2c-.949-.022-1.931.34-2.838 1.099a.988.988 0 00-.067.061L2.874 16.181A3 3 0 002 18.3v1.693C2 21.094 2.892 22 4.004 22h1.679a3 3 0 002.125-.883L20.774 8.1zm-3.567-2.307a1 1 0 10-1.414 1.414l1 1a1 1 0 101.414-1.414l-1-1z"
        }
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon106Icon;
/* prettier-ignore-end */
