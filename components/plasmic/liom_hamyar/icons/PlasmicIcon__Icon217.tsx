/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon217IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon217Icon(props: Icon217IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <mask
          id={"YKYQ5B-A4ZD1a"}
          x={"-2"}
          y={"-2"}
          width={"24"}
          height={"24"}
          maskUnits={"userSpaceOnUse"}
        >
          <path
            fill={"#d9d9d9"}
            d={"M-2-2h24v24H-2z"}
            data-name={"mask0 802 10291"}
          ></path>
        </mask>
      </defs>

      <g fill={"#fff"} mask={"url(#YKYQ5B-A4ZD1a)"}>
        <path
          d={
            "M10 12.5c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zm0 3.25c-.06 0-.13-.01-.2-.02a.636.636 0 01-.18-.06.757.757 0 01-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.18-.06.13-.03.27-.03.39 0 .07.01.13.03.19.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71s-.11.52-.29.71l-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02z"
          }
        ></path>

        <path
          d={
            "M15.63 20H4.37c-1.81 0-3.2-.7-3.9-1.96-.7-1.26-.6-2.88.28-4.57L6.37 2.75C7.3.98 8.58 0 10 0s2.7.97 3.63 2.75l5.63 10.74c.88 1.68.99 3.3.28 4.57-.71 1.25-2.09 1.95-3.9 1.95zM10 1.48c-.87 0-1.73.71-2.41 1.99L1.97 14.2c-.63 1.2-.73 2.3-.3 3.1.44.8 1.4 1.23 2.7 1.23h11.27c1.3 0 2.26-.43 2.7-1.23.45-.8.33-1.89-.3-3.1L12.41 3.46c-.68-1.28-1.53-1.99-2.41-1.99z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon217Icon;
/* prettier-ignore-end */
