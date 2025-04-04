/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon148IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon148Icon(props: Icon148IconProps) {
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
          "M3.5 18.96c-.3 0-.592-.076-.842-.226-.558-.325-.875-.975-.875-1.783V7.484A3.219 3.219 0 015 4.268h6.483A3.219 3.219 0 0114.7 7.484v9.467c0 .808-.317 1.45-.875 1.783-.558.325-1.275.292-1.983-.1L8.566 16.81c-.159-.091-.492-.091-.65 0l-3.275 1.825a2.337 2.337 0 01-1.142.325zM5.008 5.525a1.97 1.97 0 00-1.966 1.967v9.466c0 .342.1.609.258.7.158.092.442.05.742-.116l3.275-1.825c.533-.292 1.333-.292 1.866 0l3.275 1.825c.3.166.575.208.742.116.158-.091.258-.358.258-.7V7.493a1.97 1.97 0 00-1.966-1.967H5.008z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.991 18.958c-.367 0-.75-.108-1.142-.316l-3.275-1.825c-.158-.084-.5-.084-.658 0l-3.267 1.825c-.708.391-1.433.425-1.983.1-.558-.325-.875-.975-.875-1.775V7.5a3.219 3.219 0 013.217-3.217h6.483A3.219 3.219 0 0114.708 7.5v9.467c0 .8-.317 1.45-.875 1.775-.25.141-.534.216-.842.216zM8.249 15.5c.334 0 .659.075.934.225l3.275 1.825c.3.167.583.208.741.108.159-.091.259-.358.259-.7V7.492a1.97 1.97 0 00-1.967-1.967H5.008A1.97 1.97 0 003.04 7.492v9.466c0 .342.1.609.258.7.159.092.442.05.742-.116l3.275-1.825c.267-.142.6-.217.933-.217z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.991 15.727c-.367 0-.75-.109-1.142-.317l-3.075-1.717a.61.61 0 01-.316-.541v-5.65a1.97 1.97 0 00-1.967-1.967H7.416a.63.63 0 01-.625-.625v-.642a3.219 3.219 0 013.217-3.216h6.483a3.219 3.219 0 013.217 3.216v9.467c0 .8-.317 1.45-.875 1.775-.25.142-.534.217-.842.217zm-3.283-2.95l2.75 1.541c.3.167.575.209.741.109.167-.1.259-.359.259-.7V4.26a1.97 1.97 0 00-1.967-1.967h-6.483A1.97 1.97 0 008.04 4.26v.017h3.45a3.219 3.219 0 013.217 3.216v5.284z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon148Icon;
/* prettier-ignore-end */
