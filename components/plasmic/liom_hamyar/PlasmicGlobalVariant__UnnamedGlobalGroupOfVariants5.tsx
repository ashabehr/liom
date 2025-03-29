/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type UnnamedGlobalGroupOfVariants5Value = "unnamedVariant";
export const UnnamedGlobalGroupOfVariants5Context = React.createContext<
  UnnamedGlobalGroupOfVariants5Value | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useUnnamedGlobalGroupOfVariants5() {
  return React.useContext(UnnamedGlobalGroupOfVariants5Context);
}

export default UnnamedGlobalGroupOfVariants5Context;
/* prettier-ignore-end */
