/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon127IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon127Icon(props: Icon127IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M449.891 87.953a49.69 49.69 0 00-17.922-21.781 49.552 49.552 0 00-27.719-8.469h-42.656v-7.359h-61.828c.281-2 .438-4.063.438-6.141C300.203 19.828 280.375 0 256 0s-44.203 19.828-44.203 44.203a44.1 44.1 0 00.438 6.141h-61.828v7.359H107.75a49.317 49.317 0 00-19.281 3.906 49.738 49.738 0 00-21.797 17.922 49.588 49.588 0 00-8.469 27.719v355.219a49.49 49.49 0 003.906 19.281 49.69 49.69 0 0017.922 21.781A49.463 49.463 0 00107.75 512h296.5c6.797 0 13.359-1.375 19.281-3.906 8.922-3.75 16.453-10.031 21.797-17.922a49.539 49.539 0 008.469-27.703V107.25c0-6.812-1.375-13.359-3.906-19.297zM256 27.797c9.047 0 16.406 7.359 16.406 16.406a16.43 16.43 0 01-1.203 6.141h-30.391a16.127 16.127 0 01-1.219-6.141c.001-9.047 7.376-16.406 16.407-16.406zm168.328 434.672c0 2.813-.563 5.406-1.578 7.797-1.5 3.578-4.063 6.672-7.281 8.859a19.903 19.903 0 01-11.219 3.406h-296.5c-2.813 0-5.422-.563-7.813-1.563-3.594-1.516-6.672-4.094-8.844-7.297a20.026 20.026 0 01-3.422-11.203V107.25c0-2.813.563-5.422 1.578-7.813a20.152 20.152 0 017.281-8.844c3.219-2.156 7-3.406 11.219-3.422h42.656v6.141c0 11.531 9.344 20.875 20.891 20.875h169.422c11.531 0 20.875-9.344 20.875-20.875v-6.141h42.656c2.813 0 5.422.563 7.813 1.578 3.578 1.5 6.672 4.063 8.844 7.281s3.422 7 3.422 11.219v355.22z"
          }
        ></path>

        <path
          d={
            "M156.141 170.672h31.625v31.625h-31.625zm69.375 0h130.359v31.625H225.516zm-69.375 93.453h31.625v31.625h-31.625zm69.375 0h130.359v31.625H225.516zm-69.375 93.469h31.625v31.625h-31.625zm69.375 0h130.359v31.625H225.516z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon127Icon;
/* prettier-ignore-end */
