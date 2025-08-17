/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon118IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon118Icon(props: Icon118IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"256"} cy={"256"} r={"256"} fill={"#fad24d"}></circle>

      <path
        d={
          "M270.614 225.815c-1.284-55.115 58.487-99.114 68.663-164.146 10.175 65.032 69.947 109.031 68.663 164.146-.001 90.319-137.326 90.319-137.326 0z"
        }
        fill={"#ff5b62"}
      ></path>

      <path
        d={
          "M339.277 61.669c10.175 65.032 69.947 109.031 68.662 164.146 0 69.57-81.466 85.538-118.901 47.931 31.052 24.36 87.168 14.929 104.72-22.377 27.338-58.102-54.607-121.463-54.481-189.7z"
        }
        fill={"#ed4c54"}
      ></path>

      <path
        d={
          "M318.23 133.11s-56.569 66.775-36.922 105.865c16.427 32.69 14.249-61.541 36.922-105.865z"
        }
        fill={"#ff878e"}
      ></path>

      <path
        d={
          "M104.074 336.588c-2.017-86.456 91.745-155.474 107.707-257.486 15.962 102.012 109.722 171.03 107.707 257.486-.001 141.677-215.414 141.677-215.414 0z"
        }
        fill={"#ff5b62"}
      ></path>

      <path
        d={
          "M211.78 79.102c15.962 102.012 109.723 171.032 107.707 257.486 0 109.131-127.792 134.179-186.515 75.188 48.71 38.213 136.736 23.419 164.27-35.103 42.884-91.143-85.658-190.533-85.462-297.571z"
        }
        fill={"#ed4c54"}
      ></path>

      <path
        d={
          "M178.766 191.167S90.03 295.91 120.848 357.23c25.769 51.281 22.352-96.534 57.918-166.063z"
        }
        fill={"#ff878e"}
      ></path>
    </svg>
  );
}

export default Icon118Icon;
/* prettier-ignore-end */
