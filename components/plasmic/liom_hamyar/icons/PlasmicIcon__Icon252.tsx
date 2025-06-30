/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon252IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon252Icon(props: Icon252IconProps) {
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
        fill={"currentColor"}
        d={
          "m21.349 16.182-6.13-11.737C14.394 2.866 13.254 2 12 2s-2.395.866-3.218 2.445l-6.13 11.737c-.777 1.498-.863 2.935-.24 4.066C3.034 21.378 4.26 22 5.87 22h12.26c1.61 0 2.836-.622 3.458-1.752.623-1.131.537-2.578-.24-4.066m-10.067-7.05c0-.418.325-.764.718-.764s.718.346.718.764v5.094c0 .418-.325.764-.718.764s-.718-.346-.718-.764zm1.398 8.874-.144.122a.7.7 0 0 1-.172.092.6.6 0 0 1-.182.061c-.058.01-.125.02-.182.02s-.124-.01-.192-.02a.6.6 0 0 1-.172-.06.7.7 0 0 1-.172-.093l-.144-.122a1.1 1.1 0 0 1-.278-.723c0-.265.106-.53.278-.724l.144-.122a.7.7 0 0 1 .172-.092.6.6 0 0 1 .172-.06.8.8 0 0 1 .374 0c.067.01.124.03.182.06q.086.03.172.092l.144.122c.172.194.278.459.278.724s-.106.53-.278.723"
        }
      ></path>
    </svg>
  );
}

export default Icon252Icon;
/* prettier-ignore-end */
