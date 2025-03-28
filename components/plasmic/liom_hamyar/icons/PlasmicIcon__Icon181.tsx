/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon181IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon181Icon(props: Icon181IconProps) {
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
        d={
          "M14.23 16.11h-1.98c-.46 0-1.13-.14-1.52-.53l-1.54-1.19.92-1.19 1.61 1.25c.12.09.34.15.53.15h1.98c.3 0 .66-.26.73-.52l1.26-3.85c.03-.08.06-.19.01-.27-.04-.06-.15-.1-.28-.1h-2.08c-.37 0-.72-.16-.97-.44-.24-.28-.35-.66-.3-1.04l.26-1.67a.295.295 0 00-.17-.32c-.09-.03-.24.02-.28.07l-2.13 3.17-1.25-.84 2.13-3.17c.42-.63 1.31-.92 2.03-.65.81.27 1.33 1.17 1.15 2.01l-.21 1.37h1.82c.63 0 1.18.27 1.51.74.32.46.39 1.05.19 1.62l-1.24 3.78c-.23.89-1.19 1.62-2.18 1.62z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.56 15.54h-.52c-1.56 0-1.79-1.09-1.79-1.74V8.71c0-.65.23-1.74 1.79-1.74h.52c1.56 0 1.79 1.09 1.79 1.74v5.09c0 .65-.23 1.74-1.79 1.74zm-.78-1.51c.03 0 .11.01.26.01h.52c.16 0 .25-.02.28-.03 0-.02.01-.08.01-.21V8.71c0-.13-.01-.2-.02-.22-.02 0-.1-.01-.27-.01h-.52c-.16 0-.25.02-.28.03 0 .02-.01.08-.01.21v5.09c0 .13.01.2.02.23 0-.01.01-.01.01-.01z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 22.75c-.7 0-1.41-.27-1.94-.8l-1.71-1.69c-.43-.42-.99-.65-1.59-.65H6c-2.07 0-3.75-1.67-3.75-3.72V4.98c0-2.05 1.68-3.72 3.75-3.72h12c2.07 0 3.75 1.67 3.75 3.72v10.91c0 2.05-1.68 3.72-3.75 3.72h-.76c-.6 0-1.17.23-1.59.65l-1.71 1.69c-.53.53-1.24.8-1.94.8zm-6-20c-1.24 0-2.25 1-2.25 2.22v10.91c0 1.23 1.01 2.22 2.25 2.22h.76c1 0 1.94.39 2.65 1.09l1.71 1.69c.49.48 1.28.48 1.77 0l1.71-1.69c.71-.7 1.65-1.09 2.65-1.09H18c1.24 0 2.25-1 2.25-2.22V4.97c0-1.23-1.01-2.22-2.25-2.22H6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon181Icon;
/* prettier-ignore-end */
