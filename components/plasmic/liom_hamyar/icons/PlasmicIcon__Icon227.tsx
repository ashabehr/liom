/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon227IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon227Icon(props: Icon227IconProps) {
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
          "M19.95 18.75a.728.728 0 01-.75-.75v-3c0-.9-.317-1.667-.95-2.3a3.133 3.133 0 00-2.3-.95h-9.8L9.5 15.1c.133.133.2.3.2.5a.72.72 0 01-.225.525.72.72 0 01-.525.225.72.72 0 01-.525-.225l-4.5-4.5a.81.81 0 01-.187-.288.922.922 0 010-.675.813.813 0 01.187-.287L8.45 5.85c.133-.133.3-.2.5-.2s.375.075.525.225A.72.72 0 019.7 6.4a.72.72 0 01-.225.525L6.15 10.25h9.8c1.317 0 2.437.462 3.362 1.387.925.925 1.388 2.046 1.388 3.363v3c0 .217-.07.396-.212.538a.731.731 0 01-.538.212z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon227Icon;
/* prettier-ignore-end */
