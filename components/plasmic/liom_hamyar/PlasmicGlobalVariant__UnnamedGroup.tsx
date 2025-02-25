// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type UnnamedGroupValue = "unnamedVariant";
export const UnnamedGroupContext = React.createContext<
  UnnamedGroupValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useUnnamedGroup() {
  return React.useContext(UnnamedGroupContext);
}

export default UnnamedGroupContext;
/* prettier-ignore-end */
