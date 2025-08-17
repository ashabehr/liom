/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon175IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon175Icon(props: Icon175IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.96 30.333c-.814 0-1.654-.066-2.507-.213-5.867-1-10.653-5.8-11.627-11.693-.773-4.68.68-9.254 4-12.574 3.32-3.32 7.894-4.76 12.56-4 5.88.974 10.694 5.747 11.694 11.614a15 15 0 01.16 3.76v.013c-.027.307-.08.6-.16.893a1.022 1.022 0 01-.667.694c-.32.106-.68.026-.947-.187A7.016 7.016 0 0023.96 17c-3.867 0-7 3.147-7 7 0 1.653.586 3.253 1.64 4.507a.977.977 0 01.186.946.996.996 0 01-.693.667c-.293.08-.587.133-.893.16-.4.04-.814.053-1.24.053zm0-26.666c-3.267 0-6.36 1.266-8.707 3.613-2.853 2.853-4.107 6.8-3.44 10.827.84 5.053 4.933 9.186 9.987 10.04.8.133 1.56.213 2.293.186A9.065 9.065 0 0114.986 24c0-4.96 4.04-9 9-9 1.52 0 3.014.387 4.334 1.107a12.55 12.55 0 00-.187-2.294c-.853-5.04-4.987-9.146-10.04-9.973-.733-.12-1.44-.173-2.133-.173z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.84 30.147a.947.947 0 01-.76-.36A8.996 8.996 0 0114.96 24c0-4.96 4.04-9 9-9 2.12 0 4.174.747 5.787 2.12a.998.998 0 01.32 1.04 4.968 4.968 0 01-1.28 2.16l-8.507 8.507a5.045 5.045 0 01-2.16 1.28c-.093.026-.186.04-.28.04zM23.96 17c-3.866 0-7 3.147-7 7 0 1.413.427 2.787 1.214 3.933.253-.133.48-.306.693-.52l8.507-8.506a2.89 2.89 0 00.52-.694A6.958 6.958 0 0023.96 17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon175Icon;
/* prettier-ignore-end */
