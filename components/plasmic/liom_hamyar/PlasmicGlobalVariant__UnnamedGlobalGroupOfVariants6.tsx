/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type UnnamedGlobalGroupOfVariants6Value = "unnamedVariant";
export const UnnamedGlobalGroupOfVariants6Context = React.createContext<
  UnnamedGlobalGroupOfVariants6Value | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);
export function UnnamedGlobalGroupOfVariants6ContextProvider(
  props: React.PropsWithChildren<{
    value: UnnamedGlobalGroupOfVariants6Value | undefined;
  }>
) {
  return (
    <UnnamedGlobalGroupOfVariants6Context.Provider value={props.value}>
      {props.children}
    </UnnamedGlobalGroupOfVariants6Context.Provider>
  );
}

export function useUnnamedGlobalGroupOfVariants6() {
  return React.useContext(UnnamedGlobalGroupOfVariants6Context);
}

export default UnnamedGlobalGroupOfVariants6Context;
/* prettier-ignore-end */
