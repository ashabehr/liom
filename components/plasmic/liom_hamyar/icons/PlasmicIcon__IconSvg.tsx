/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSvgIcon(props: IconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"222 -264.9 700 700"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"572"} cy={"85.1"} r={"334.7"} fill={"#0091ea"}></circle>

      <path
        d={
          "M777.3 45.5c-2.8-63.4-54.9-113.7-118.9-113.7-35.5 0-67.5 15.7-89.3 40.3-21.8-24.6-53.8-40.3-89.3-40.3-62.7 0-114.1 48.3-118.7 110.2-.2 1.3-.2 3-.2 4.6v134.3c0 16.5 13.3 29.8 29.8 29.8h.7c16.5 0 29.8-13.3 29.8-29.8v-130h.2c0-32.7 26.6-59.2 59.2-59.2 32.7 0 59.2 26.6 59.2 59.2h.2v109.7c0 16.5 13.3 29.8 29.8 29.8h.7c16.5 0 29.8-13.3 29.8-29.8v-110c.2-32.7 26.6-58.8 59.2-58.8S719 18.5 719 51.1h.2v130.2c0 16.3 13.3 29.4 29.4 29.4h.7c16.3 0 29.4-13.3 29.4-29.4V48.5c-1.4-1.5-1.4-2.2-1.4-3zM664.8 222.3c-1.3-2.2-5.7 2.2-5.7 2.2-16.5 17.9-50.7 29.4-86.2 29.4s-69.5-11.5-86.2-29.4c0 0-4.4-4.6-5.7-2.2-1.7 2.6.9 6.8.9 6.8 21.1 30.5 53.3 44.2 91 44.2s69.9-13.7 91-44.2c.2-.1 2.6-4.2.9-6.8z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default IconSvgIcon;
/* prettier-ignore-end */
