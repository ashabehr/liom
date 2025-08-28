/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M9.81 4.235c-.433.511-.51 1.165-.51 1.876v.765a.765.765 0 0 1-.763.763H7.009a.765.765 0 0 1-.765-.763V6.11c0-.817.05-2.453 1.237-3.853C8.7.822 10.787 0 14.01 0c3.337 0 5.369 1.085 6.482 2.646 1.029 1.447 1.032 2.996 1.032 3.444v.782a.764.764 0 0 1-.76.765l-1.529.004a.763.763 0 0 1-.766-.763v-.765c0-.345-.018-1.06-.466-1.694-.385-.54-1.345-1.363-3.993-1.363-2.763 0-3.794.703-4.2 1.179h.002z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"1.746"}
        d={
          "m2.529 24.468-1.461-8.403a4.583 4.583 0 0 1 4.515-5.367h16.83a4.584 4.584 0 0 1 4.544 5.175l-1.095 8.403a4.584 4.584 0 0 1-4.545 3.99H7.042a4.58 4.58 0 0 1-4.513-3.797z"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M20.298 9.933c.676 0 1.224.548 1.224 1.222v2.14a1.22 1.22 0 0 1-1.222 1.221h-.612a1.22 1.22 0 0 1-1.222-1.221v-2.14c0-.674.548-1.222 1.222-1.222zm-12.22 0c.674 0 1.222.548 1.222 1.222v2.14a1.22 1.22 0 0 1-1.222 1.221h-.612a1.22 1.22 0 0 1-1.222-1.221v-2.14c0-.674.548-1.222 1.222-1.222z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
