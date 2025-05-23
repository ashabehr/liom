/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: fmyovDT1Cvc-

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Input } from "@plasmicpkgs/antd/skinny/registerInput";
import { inputHelpers as Input_Helpers } from "@plasmicpkgs/antd/skinny/registerInput";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicSearch.module.css"; // plasmic-import: fmyovDT1Cvc-/css

import SearchSvgIcon from "./icons/PlasmicIcon__SearchSvg"; // plasmic-import: Hrcd2gLhG27X/icon
import XIcon from "./icons/PlasmicIcon__X"; // plasmic-import: oNIrT_jmAMSE/icon

createPlasmicElementProxy;

export type PlasmicSearch__VariantMembers = {};
export type PlasmicSearch__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearch__VariantsArgs;
export const PlasmicSearch__VariantProps = new Array<VariantPropType>();

export type PlasmicSearch__ArgsType = {
  antdInput2?: React.ReactNode;
  onClick?: (event: any) => void;
  variable?: boolean;
  onVariableChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicSearch__ArgsType;
export const PlasmicSearch__ArgProps = new Array<ArgPropType>(
  "antdInput2",
  "onClick",
  "variable",
  "onVariableChange"
);

export type PlasmicSearch__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultSearchProps {
  antdInput2?: React.ReactNode;
  onClick?: (event: any) => void;
  variable?: boolean;
  onVariableChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSearch__RenderFunc(props: {
  variants: PlasmicSearch__VariantsArgs;
  args: PlasmicSearch__ArgsType;
  overrides: PlasmicSearch__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variable",
        type: "writable",
        variableType: "boolean",

        valueProp: "variable",
        onChangeProp: "onVariableChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(triggers.hover_root ? true : false)
        ? renderPlasmicSlot({
            defaultContents: (() => {
              const child$Props = {
                bordered: false,
                className: classNames("__wab_instance", sty.antdInput___8ATk5)
              };

              return <Input {...child$Props} />;
            })(),
            value: args.antdInput2
          })
        : null}
      {(() => {
        try {
          return !$state.variable;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <SearchSvgIcon
          className={classNames(projectcss.all, sty.svg__uaSjR)}
          role={"img"}
        />
      ) : null}
      {(() => {
        try {
          return $state.variable;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <XIcon
          className={classNames(projectcss.all, sty.svg__hCFv)}
          onClick={args.onClick}
          role={"img"}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearch__VariantsArgs;
    args?: PlasmicSearch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSearch__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSearch__ArgProps,
          internalVariantPropNames: PlasmicSearch__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSearch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearch";
  } else {
    func.displayName = `PlasmicSearch.${nodeName}`;
  }
  return func;
}

export const PlasmicSearch = Object.assign(
  // Top-level PlasmicSearch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSearch
    internalVariantProps: PlasmicSearch__VariantProps,
    internalArgProps: PlasmicSearch__ArgProps
  }
);

export default PlasmicSearch;
/* prettier-ignore-end */
