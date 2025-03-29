/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type UnnamedGlobalGroupOfVariants4Value = "unnamedVariant";
export const UnnamedGlobalGroupOfVariants4Context = React.createContext<
  UnnamedGlobalGroupOfVariants4Value | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useUnnamedGlobalGroupOfVariants4() {
  return React.useContext(UnnamedGlobalGroupOfVariants4Context);
}

export default UnnamedGlobalGroupOfVariants4Context;
/* prettier-ignore-end */
