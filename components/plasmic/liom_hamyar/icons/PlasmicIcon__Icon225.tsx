/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon225IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon225Icon(props: Icon225IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M15.635 29.938c-.184.623-.197 1.37.08 2.26a3.02 3.02 0 01.285-.013c1.657 0 3 1.353 3 3.022 0 1.67-1.343 3.023-3 3.023s-3-1.354-3-3.023c0-.841.341-1.603.893-2.15-.46-1.316-.51-2.557-.175-3.688l.023-.075C9.542 30.797 6 33.19 6 36.466V43h36v-6.534c0-3.247-3.479-5.626-7.628-7.13.204.58.32 1.197.342 1.85h.227a1 1 0 01.632.224l2.059 1.68a1 1 0 01.368.774v4.366a1 1 0 01-1 1h-2.059v-2H36v-2.891l-1.415-1.154h-.08l-.029.118-.477-.118h-1.584L31 34.34v2.89h1.059v2H30a1 1 0 01-1-1v-4.365a1 1 0 01.368-.775l2.059-1.679a1 1 0 01.632-.225h.654a4.122 4.122 0 00-.302-1.38 4.29 4.29 0 00-.897-1.35l-.393-.098a1.1 1.1 0 00-1.246.597h-11.75a1.1 1.1 0 00-1.246-.597l-.337.084c-.443.457-.747.958-.907 1.497zM17 35.207c0 .578-.462 1.022-1 1.022s-1-.444-1-1.023c0-.578.462-1.022 1-1.022s1 .444 1 1.022z"
          }
        ></path>

        <path
          d={
            "M12 20.186C12 24.814 20.353 26 20.353 26s-5.721-8.898-2.86-10.44c2.86-1.543 10.641-4.51 11.213-3.441C33.97 19.712 27.22 26 27.22 26S35 25.288 35 20.186c0-5.101-3.662-11.27-3.662-11.27S28.706 5 23.558 5c-5.15 0-6.98 3.915-6.98 3.915S12 15.56 12 20.186z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon225Icon;
/* prettier-ignore-end */
