/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon165IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon165Icon(props: Icon165IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 140 154"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M81.344 41.756L32.756 81.965c-8.387 6.94-9.56 19.366-2.619 27.753 6.94 8.388 19.367 9.56 27.754 2.619l48.588-40.208c8.387-6.94 9.56-19.367 2.619-27.754-6.941-8.387-19.367-9.56-27.754-2.619zM28.931 77.342c-10.94 9.053-12.47 25.261-3.416 36.202 9.053 10.94 25.261 12.469 36.201 3.416l48.588-40.209c10.94-9.053 12.47-25.261 3.416-36.201-9.053-10.94-25.261-12.47-36.201-3.416L28.93 77.342z"
        }
        fill={"#8254C6"}
      ></path>

      <path
        d={
          "M33.416 73.63l-4.485 3.712c-10.94 9.053-12.47 25.261-3.416 36.202 9.053 10.94 25.261 12.469 36.201 3.416l4.485-3.712c10.94-9.053 12.47-25.261 3.416-36.201-9.053-10.94-25.261-12.47-36.201-3.416z"
        }
        fill={"#8254C6"}
      ></path>

      <path
        fill={"#8254C6"}
        d={"M53.782 58.025l30.91 37.442-13.11 10.823-30.91-37.442z"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M47.726 73.972a2.5 2.5 0 01-.45 3.506c-1.154.893-2.264 1.728-3.336 2.535-1.582 1.19-3.083 2.318-4.53 3.483-2.386 1.92-4.36 3.732-5.803 5.613-1.422 1.855-2.286 3.721-2.533 5.773-.247 2.056.099 4.52 1.461 7.609a2.5 2.5 0 11-4.574 2.018c-1.637-3.711-2.229-7.084-1.851-10.225.378-3.145 1.702-5.835 3.53-8.218 1.806-2.356 4.146-4.463 6.635-6.465 1.486-1.196 3.125-2.43 4.775-3.672 1.065-.802 2.134-1.606 3.17-2.407a2.5 2.5 0 013.506.45z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Icon165Icon;
/* prettier-ignore-end */
