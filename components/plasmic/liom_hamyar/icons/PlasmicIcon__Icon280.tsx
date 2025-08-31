/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon280IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon280Icon(props: Icon280IconProps) {
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
          "M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25M20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16c0-.55-.45-1-1-1M9.21 18.21q-.15.135-.33.21c-.12.05-.25.08-.38.08s-.26-.03-.38-.08q-.18-.075-.33-.21c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71q.15-.135.33-.21a1 1 0 0 1 .76 0q.18.075.33.21c.18.19.29.45.29.71s-.11.52-.29.71m.21-3.83q-.075.18-.21.33-.15.135-.33.21c-.12.05-.25.08-.38.08s-.26-.03-.38-.08q-.18-.075-.33-.21-.135-.15-.21-.33A1 1 0 0 1 7.5 14c0-.13.03-.26.08-.38q.075-.18.21-.33.15-.135.33-.21a1 1 0 0 1 .76 0q.18.075.33.21.135.15.21.33c.05.12.08.25.08.38s-.03.26-.08.38m3.29.33q-.15.135-.33.21c-.12.05-.25.08-.38.08s-.26-.03-.38-.08q-.18-.075-.33-.21c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71q.15-.135.33-.21c.24-.11.52-.11.76 0q.18.075.33.21c.18.19.29.45.29.71s-.11.52-.29.71"
        }
      ></path>
    </svg>
  );
}

export default Icon280Icon;
/* prettier-ignore-end */
