/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={
          "M15.181 9.53a3.877 3.877 0 1 1-7.754 0 3.877 3.877 0 0 1 7.754 0zm10.856-4.653a3.877 3.877 0 1 1-7.754 0 3.877 3.877 0 0 1 7.754 0z"
        }
      ></path>

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M22.16 27.365c-1.55 1.55-19.386.775-20.937 0-1.55-.776 5.289-7.755 10.856-7.755s10.974 6.862 10.081 7.755"
        }
      ></path>

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        d={
          "M22.936 13.907c3.153 0 6.466 1.915 8.649 3.817 1.099.958 2.011 2 2.502 2.925.236.447.443.995.41 1.551-.02.3-.111.62-.32.904v.001a1.7 1.7 0 0 1-.783.587l-.002.001c-.327.126-.743.206-1.157.266q-.325.047-.698.084l-.775.064a67 67 0 0 1-3.535.132h-.002c-.91.014-1.79.016-2.53.013a30 30 0 0 0-1.634-2.118h.004q2.066.035 4.13.005h.001a65 65 0 0 0 3.416-.128v-.002a22 22 0 0 0 .955-.084l.867-.097-.521-.698a11 11 0 0 0-1.716-1.826c-2.02-1.761-4.85-3.295-7.261-3.295-1.593 0-2.422.206-3.072.575-.517.292-.97.71-1.588 1.36a11 11 0 0 0-2.013-.926c.863-.937 1.626-1.73 2.564-2.262 1.1-.624 2.345-.849 4.108-.849z"
        }
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
