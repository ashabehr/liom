/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type UnnamedGlobalGroupOfVariants8Value = "unnamedVariant";
export const UnnamedGlobalGroupOfVariants8Context = React.createContext<
  UnnamedGlobalGroupOfVariants8Value | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);
export function UnnamedGlobalGroupOfVariants8ContextProvider(
  props: React.PropsWithChildren<{
    value: UnnamedGlobalGroupOfVariants8Value | undefined;
  }>
) {
  return (
    <UnnamedGlobalGroupOfVariants8Context.Provider value={props.value}>
      {props.children}
    </UnnamedGlobalGroupOfVariants8Context.Provider>
  );
}

export function useUnnamedGlobalGroupOfVariants8() {
  return React.useContext(UnnamedGlobalGroupOfVariants8Context);
}

export default UnnamedGlobalGroupOfVariants8Context;
/* prettier-ignore-end */
