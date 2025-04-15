/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon222IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon222Icon(props: Icon222IconProps) {
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
          "M18.467 5.067A2.695 2.695 0 0016.333 4H7.8a2.697 2.697 0 00-2.133 1.067L3.533 7.91A2.685 2.685 0 003 9.511v.621a2.667 2.667 0 00.66 1.761l6.301 7.201a2.666 2.666 0 002.006.906h.199a2.667 2.667 0 002.006-.91l6.301-7.197a2.667 2.667 0 00.66-1.76V9.51a2.685 2.685 0 00-.533-1.6l-2.133-2.844zm1.28 3.484c.164.23.265.5.29.782h-3.983l1.483-3.706c.207.24 1.364 1.804 2.21 2.924zm-5.22 1.849l-2.46 7.38-2.46-7.38h4.92zM9.808 9.333l2.258-3.763 2.258 3.763H9.809zM16.6 5.1l-1.43 3.57-2.162-3.604a30.787 30.787 0 013.592.032zm-5.475-.032L8.963 8.67l-1.43-3.572a31.25 31.25 0 013.592-.032zM4.387 8.55C5.514 7.058 6.38 5.874 6.596 5.627l1.483 3.706H4.095a1.6 1.6 0 01.292-.782zm.074 2.634a1.57 1.57 0 01-.345-.785h4.366l2.79 8.37a1.6 1.6 0 01-.509-.383l-6.302-7.202zm8.908 7.202a1.6 1.6 0 01-.509.383l2.792-8.37h4.366c-.04.289-.16.56-.347.785l-6.302 7.202z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon222Icon;
/* prettier-ignore-end */
