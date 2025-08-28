/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M14.5 16.571a8.285 8.285 0 0 0 8.286-8.285A8.285 8.285 0 0 0 14.5 0a8.285 8.285 0 0 0-8.286 8.286A8.285 8.285 0 0 0 14.5 16.57zM6.732 27.446A1.55 1.55 0 0 0 8.286 29a1.55 1.55 0 0 0 1.553-1.554 1.55 1.55 0 0 0-1.553-1.553 1.55 1.55 0 0 0-1.554 1.553m13.982-8.764v3.172a5.186 5.186 0 0 1 4.143 5.075v2.699c0 .492-.35.92-.835 1.016l-2.084.415a.515.515 0 0 1-.609-.408l-.2-1.017a.51.51 0 0 1 .407-.608l1.25-.253V26.93c0-4.066-6.215-4.214-6.215.123v1.728l1.25.252c.278.059.46.33.408.609l-.201 1.016a.525.525 0 0 1-.609.408l-2.02-.272a1.034 1.034 0 0 1-.892-1.03V26.93c0-2.5 1.78-4.59 4.142-5.075v-2.926c-.142.045-.285.07-.427.123a11.2 11.2 0 0 1-3.716.634c-1.3 0-2.55-.226-3.715-.634a7 7 0 0 0-1.463-.337v5.282a3.61 3.61 0 0 1 2.59 3.457c0 2-1.626 3.625-3.626 3.625s-3.625-1.625-3.625-3.625a3.61 3.61 0 0 1 2.59-3.457v-5.204C3.14 19.484 0 23.032 0 27.342v2.9c0 1.6 1.301 2.9 2.9 2.9h23.2c1.599 0 2.9-1.3 2.9-2.9v-2.9c0-4.66-3.677-8.434-8.286-8.66"
        }
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
