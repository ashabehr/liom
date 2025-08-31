/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon281IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon281Icon(props: Icon281IconProps) {
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
          "M15.26 22c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51m3.95-15.64c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.97 7.97 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56m-5.49 5.26-1.07 1.86c-.14.24-.39.38-.65.38a.754.754 0 0 1-.65-1.12l.85-1.48h-.84c-.5 0-.91-.22-1.13-.59-.22-.38-.2-.84.05-1.28l1.07-1.86c.21-.36.67-.48 1.02-.28.36.21.48.67.28 1.02l-.85 1.48h.84c.5 0 .91.22 1.13.59.22.38.2.85-.05 1.28"
        }
      ></path>
    </svg>
  );
}

export default Icon281Icon;
/* prettier-ignore-end */
