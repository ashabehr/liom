// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon205IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon205Icon(props: Icon205IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M8.384 3c.374 0 .678.312.678.696v.226l.133-.034a11.979 11.979 0 015.743.034v-.226c0-.384.304-.696.678-.696.375 0 .678.312.678.696v.733c1.934.958 3.379 2.77 3.881 4.97a12.926 12.926 0 010 5.757c-.625 2.734-2.705 4.87-5.37 5.51a11.98 11.98 0 01-5.61 0c-2.665-.64-4.745-2.775-5.37-5.51a12.926 12.926 0 010-5.757c.502-2.2 1.947-4.012 3.88-4.97v-.733c0-.384.304-.696.679-.696zm2.643 6.888a.567.567 0 000-.787.533.533 0 00-.767 0l-1.424 1.462-.52-.535a.533.533 0 00-.768 0 .567.567 0 000 .788l.904.927a.533.533 0 00.767 0l1.808-1.855zm1.877.441a.55.55 0 00-.542.557.55.55 0 00.542.557h3.165c.3 0 .542-.25.542-.557a.55.55 0 00-.543-.557h-3.164zm-1.877 4.198a.567.567 0 000-.787.533.533 0 00-.767 0L8.836 15.2l-.52-.534a.533.533 0 00-.768 0 .567.567 0 000 .787l.904.928a.533.533 0 00.767 0l1.808-1.855zm1.877.441a.55.55 0 00-.542.557.55.55 0 00.542.556h3.165c.3 0 .542-.249.542-.556a.55.55 0 00-.543-.557h-3.164z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon205Icon;
/* prettier-ignore-end */
