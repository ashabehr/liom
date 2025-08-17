/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon200IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon200Icon(props: Icon200IconProps) {
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
          "M8.5 8H8c-1.886 0-2.828 0-3.414.586C4 9.172 4 10.114 4 12v3.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h8c1.886 0 2.828 0 3.414-.586C20 18.328 20 17.386 20 15.5V12c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8h-.5m-7 0v-.5c0-1.414 0-2.121.44-2.56.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56V8m-7 0h7"
        }
        stroke={"currentColor"}
      ></path>

      <path
        d={
          "M10.932 10.963c-.057.138-.057.313-.057.662v.714c0 .017 0 .025-.005.03-.005.006-.014.006-.031.006h-.714c-.35 0-.524 0-.662.057a.75.75 0 00-.406.406C9 12.976 9 13.151 9 13.5c0 .35 0 .524.057.662a.75.75 0 00.406.406c.138.057.313.057.662.057h.714c.017 0 .025 0 .03.005.006.005.006.014.006.031v.714c0 .35 0 .524.057.662a.75.75 0 00.406.406c.138.057.313.057.662.057.35 0 .524 0 .662-.057a.75.75 0 00.406-.406c.057-.138.057-.312.057-.662v-.714c0-.017 0-.025.005-.03.005-.006.014-.006.031-.006h.714c.35 0 .524 0 .662-.057a.75.75 0 00.406-.406c.057-.138.057-.313.057-.662 0-.35 0-.524-.057-.662a.75.75 0 00-.406-.406c-.138-.057-.313-.057-.662-.057h-.714c-.017 0-.025 0-.03-.005-.006-.005-.006-.014-.006-.031v-.714c0-.35 0-.524-.057-.662a.75.75 0 00-.406-.406c-.138-.057-.313-.057-.662-.057-.35 0-.524 0-.662.057a.75.75 0 00-.406.406z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon200Icon;
/* prettier-ignore-end */
