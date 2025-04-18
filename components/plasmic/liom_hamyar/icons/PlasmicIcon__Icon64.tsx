/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon64Icon(props: Icon64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      fill={"currentColor"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "bi bi-emoji-laughing-fill"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 16A8 8 0 108 0a8 8 0 000 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 010 1A4.998 4.998 0 018 13a4.998 4.998 0 01-4.33-2.5A1 1 0 014.535 9h6.93a1 1 0 01.866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"
        }
      ></path>
    </svg>
  );
}

export default Icon64Icon;
/* prettier-ignore-end */
