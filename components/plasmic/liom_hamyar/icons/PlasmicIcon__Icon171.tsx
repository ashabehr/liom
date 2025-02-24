// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon171IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon171Icon(props: Icon171IconProps) {
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

      <mask
        id={"LSMjmkaq06nwa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"24"}
        height={"24"}
      >
        <path fill={"#D9D9D9"} d={"M0 0h24v24H0z"}></path>
      </mask>

      <g mask={"url(#LSMjmkaq06nwa)"}>
        <path
          d={
            "M12 19.275c-.417 0-.77-.146-1.062-.438a1.444 1.444 0 01-.438-1.062c0-.417.146-.77.438-1.063A1.446 1.446 0 0112 16.275c.417 0 .77.146 1.062.437.292.292.438.646.438 1.063 0 .417-.146.77-.438 1.062a1.444 1.444 0 01-1.062.438zm0-5.775c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0110.5 12c0-.417.146-.77.438-1.062A1.444 1.444 0 0112 10.5c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062 0 .417-.146.77-.438 1.062A1.444 1.444 0 0112 13.5zm0-5.775c-.417 0-.77-.146-1.062-.438a1.444 1.444 0 01-.438-1.062c0-.417.146-.77.438-1.063A1.446 1.446 0 0112 4.725c.417 0 .77.146 1.062.437.292.292.438.646.438 1.063 0 .417-.146.77-.438 1.062A1.444 1.444 0 0112 7.725z"
          }
          fill={"#280056"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon171Icon;
/* prettier-ignore-end */
