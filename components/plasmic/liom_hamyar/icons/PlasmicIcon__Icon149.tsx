// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon149IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon149Icon(props: Icon149IconProps) {
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
          "M12.351 18.025c-.983 0-2.375-.692-3.475-4l-.6-1.8-1.8-.6c-3.3-1.1-3.992-2.492-3.992-3.475 0-.975.692-2.375 3.992-3.483l7.075-2.359c1.767-.591 3.242-.416 4.15.484.908.9 1.083 2.383.492 4.15l-2.359 7.075c-1.108 3.316-2.5 4.008-3.483 4.008zM6.868 5.858C4.55 6.633 3.726 7.55 3.726 8.15c0 .6.825 1.517 3.142 2.283l2.1.7a.612.612 0 01.391.392l.7 2.1c.767 2.317 1.692 3.142 2.292 3.142.6 0 1.517-.825 2.292-3.142L17 6.55c.425-1.283.35-2.333-.192-2.875-.541-.542-1.591-.608-2.866-.183L6.868 5.858z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.924 12a.618.618 0 01-.442-.183.628.628 0 010-.884l2.984-2.991a.629.629 0 01.883 0 .629.629 0 010 .883l-2.983 2.992a.605.605 0 01-.442.183z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon149Icon;
/* prettier-ignore-end */
