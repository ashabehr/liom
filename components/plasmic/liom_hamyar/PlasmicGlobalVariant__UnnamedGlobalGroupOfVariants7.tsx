/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type UnnamedGlobalGroupOfVariants7Value = "unnamedVariant";
export const UnnamedGlobalGroupOfVariants7Context = React.createContext<
  UnnamedGlobalGroupOfVariants7Value | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);
export function UnnamedGlobalGroupOfVariants7ContextProvider(
  props: React.PropsWithChildren<{
    value: UnnamedGlobalGroupOfVariants7Value | undefined;
  }>
) {
  return (
    <UnnamedGlobalGroupOfVariants7Context.Provider value={props.value}>
      {props.children}
    </UnnamedGlobalGroupOfVariants7Context.Provider>
  );
}

export function useUnnamedGlobalGroupOfVariants7() {
  return React.useContext(UnnamedGlobalGroupOfVariants7Context);
}

export default UnnamedGlobalGroupOfVariants7Context;
/* prettier-ignore-end */
