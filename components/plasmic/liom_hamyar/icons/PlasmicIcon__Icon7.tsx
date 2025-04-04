/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 661.33 596.17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M643.41 209c-13.64-10.52-27.59-18.07-43.06-22.17-49.93-13.21-93.91-1.82-131.97 32.85-5.28 4.81-10.15 10.08-15.06 15.28-5.84 6.17-8.47 6.26-14.3-.13-11.84-12.98-24.39-25.09-39.63-34.17-64.74-38.57-159.01-21.17-193.12 67.61-24.81 64.57-19.54 127.9 15.19 188.14 24.1 41.81 57.26 75.58 94.98 105.17 4.63 3.64 9.24 7.3 13.87 10.95.42.33.89.58 1.18.77-6.04 5.26-11.78 4.14-18.29 1.03-63.89-30.51-123.22-68.16-176.78-114.46-39.66-34.29-74.81-72.7-100.45-118.99-42.33-76.4-47.1-155.65-15.36-236.42C39.45 56.52 73.53 22.1 123.97 7.59c62.99-18.13 118.9-3.48 166.97 40.93 7.35 6.79 14.01 14.3 21.07 21.41 6.43 6.47 13.79 6.54 20.15-.06 13.64-14.15 26.96-28.59 43.29-39.88 66.31-45.84 156.11-38.26 211.16 18.27 27.51 28.25 42.72 62.88 50.73 101.01 4.05 19.28 5.73 38.79 6.06 59.73z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M661.32 346.11c.58 41.24-13.27 75.5-34.98 107.03-21.28 30.9-48.01 56.56-77.51 79.51-30.78 23.95-63.57 44.68-98.34 62.32-3.02 1.53-5.34 1.65-8.4.08-47.54-24.44-91.85-53.62-130.89-90.29-29.53-27.75-54.87-58.79-69.13-97.33-16.57-44.78-15.23-89.58 4.75-132.82 29.89-64.67 108.3-67.84 150.79-25.39 4.81 4.8 9.49 9.72 14.23 14.59 20.26 20.77 48.57 20.79 68.82.16 8.13-8.28 15.66-17.21 25.18-24.03 51.31-36.73 116.9-18.55 142.26 39.49 9.59 21.95 13.13 45.1 13.2 66.68z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
