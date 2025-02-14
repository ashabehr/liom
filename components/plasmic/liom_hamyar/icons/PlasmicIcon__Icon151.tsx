// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon151IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon151Icon(props: Icon151IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.5 18.043c-.259 0-.509-.033-.717-.108C6.599 16.843 1.54 12.968 1.54 7.243c0-2.916 2.358-5.283 5.258-5.283 1.409 0 2.725.55 3.7 1.533a5.179 5.179 0 013.7-1.533c2.9 0 5.259 2.375 5.259 5.283 0 5.734-5.059 9.6-8.242 10.692a2.157 2.157 0 01-.717.108zM6.8 3.21c-2.21 0-4.01 1.808-4.01 4.033 0 5.692 5.475 8.859 7.4 9.517.15.05.475.05.625 0 1.917-.658 7.4-3.817 7.4-9.517 0-2.225-1.8-4.033-4.008-4.033a3.96 3.96 0 00-3.2 1.617c-.234.316-.767.316-1 0A3.975 3.975 0 006.799 3.21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon151Icon;
/* prettier-ignore-end */
