/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon177IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon177Icon(props: Icon177IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.5 20.3v-4.825h-.075c-1.65-.083-3.05-.692-4.2-1.825C1.075 12.517.5 11.133.5 9.5c0-1.683.58-3.104 1.738-4.263C3.396 4.08 4.817 3.5 6.5 3.5h1.35L6.025 1.65 7.075.6l3.65 3.65-3.65 3.675-1.05-1.075L7.85 5H6.5c-1.25 0-2.313.437-3.188 1.312S2 8.25 2 9.5c0 1.267.467 2.333 1.4 3.2.933.867 2.042 1.3 3.325 1.3H8v2.675L10.675 14H13.5c1.25 0 2.313-.437 3.188-1.312S18 10.75 18 9.5c0-1.25-.437-2.313-1.312-3.188S14.75 5 13.5 5h-.4V3.5h.4c1.683 0 3.104.58 4.263 1.737C18.921 6.396 19.5 7.817 19.5 9.5c0 1.683-.579 3.104-1.737 4.262-1.159 1.159-2.58 1.738-4.263 1.738h-2.2l-4.8 4.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon177Icon;
/* prettier-ignore-end */
