// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: 6sTznFJMP8UH

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicDialog.module.css"; // plasmic-import: 6sTznFJMP8UH/css

import EmojiHappySquareSvgrepoComSvg2Icon from "./icons/PlasmicIcon__EmojiHappySquareSvgrepoComSvg2"; // plasmic-import: xOMaWtcuO4fo/icon
import EmojiSadSquareSvgrepoComSvgIcon from "./icons/PlasmicIcon__EmojiSadSquareSvgrepoComSvg"; // plasmic-import: r-c9byRGfifF/icon
import AlertSquareSvgrepoComSvgIcon from "./icons/PlasmicIcon__AlertSquareSvgrepoComSvg"; // plasmic-import: bTd1uEuZ9z9X/icon

createPlasmicElementProxy;

export type PlasmicDialog__VariantMembers = {
  failed: "failed";
  alert: "alert";
};
export type PlasmicDialog__VariantsArgs = {
  failed?: SingleBooleanChoiceArg<"failed">;
  alert?: SingleBooleanChoiceArg<"alert">;
};
type VariantPropType = keyof PlasmicDialog__VariantsArgs;
export const PlasmicDialog__VariantProps = new Array<VariantPropType>(
  "failed",
  "alert"
);

export type PlasmicDialog__ArgsType = {
  onClick?: (event: any) => void;
};
type ArgPropType = keyof PlasmicDialog__ArgsType;
export const PlasmicDialog__ArgProps = new Array<ArgPropType>("onClick");

export type PlasmicDialog__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultDialogProps {
  onClick?: (event: any) => void;
  failed?: SingleBooleanChoiceArg<"failed">;
  alert?: SingleBooleanChoiceArg<"alert">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDialog__RenderFunc(props: {
  variants: PlasmicDialog__VariantsArgs;
  args: PlasmicDialog__ArgsType;
  overrides: PlasmicDialog__OverridesType;
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
        path: "failed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.failed
      },
      {
        path: "alert",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.alert
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootalert]: hasVariant($state, "alert", "alert"),
          [sty.rootfailed]: hasVariant($state, "failed", "failed")
        }
      )}
    >
      <PlasmicIcon__
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant($state, "alert", "alert")
            ? AlertSquareSvgrepoComSvgIcon
            : hasVariant($state, "failed", "failed")
            ? EmojiSadSquareSvgrepoComSvgIcon
            : EmojiHappySquareSvgrepoComSvg2Icon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgalert]: hasVariant($state, "alert", "alert"),
          [sty.svgfailed]: hasVariant($state, "failed", "failed")
        })}
        role={"img"}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__wRvWk,
          {
            [sty.textalert__wRvWk0FCvr]: hasVariant($state, "alert", "alert"),
            [sty.textfailed__wRvWk2Yvft]: hasVariant($state, "failed", "failed")
          }
        )}
      >
        {hasVariant($state, "alert", "alert")
          ? "\u0645\u0634\u06a9\u0644\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a "
          : hasVariant($state, "failed", "failed")
          ? "\u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0627\u0645\u0648\u0641\u0642"
          : "\u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0648\u0641\u0642"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__g4Ey2,
          {
            [sty.textalert__g4Ey20FCvr]: hasVariant($state, "alert", "alert"),
            [sty.textfailed__g4Ey22Yvft]: hasVariant($state, "failed", "failed")
          }
        )}
      >
        {hasVariant($state, "failed", "failed")
          ? "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06cc\u0627\u062f \u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0627\u0648\u0645\u062f\u0647 \u0648 \u062a\u0631\u0627\u06a9\u0646\u0634 \u062a\u06a9\u0645\u06cc\u0644 \u0646\u0634\u062f\u0647. \u0644\u0637\u0641\u0627\u064b \u06cc\u0647 \u0628\u0627\u0631 \u062f\u06cc\u06af\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0648 \u0628\u0631\u0631\u0633\u06cc \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f. \u0627\u06af\u0631 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc \u062f\u0627\u0634\u062a\u06cc\u062f\u060c \u0645\u0627 \u0627\u06cc\u0646\u062c\u0627\u06cc\u06cc\u0645 \u062a\u0627 \u06a9\u0645\u06a9\u062a\u0648\u0646 \u06a9\u0646\u06cc\u0645."
          : "\u0627\u0632 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u0645\u0627 \u0633\u067e\u0627\u0633\u06af\u0632\u0627\u0631\u06cc\u0645. \u0627\u0634\u062a\u0631\u0627\u06a9 \u0634\u0645\u0627 \u0627\u06a9\u0646\u0648\u0646 \u0641\u0639\u0627\u0644 \u0627\u0633\u062a \u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u062e\u062f\u0645\u0627\u062a \u0645\u0627 \u0628\u0647\u0631\u0647\u200c\u0645\u0646\u062f \u0634\u0648\u06cc\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a \u062f\u0627\u0634\u062a\u0646 \u0647\u0631\u06af\u0648\u0646\u0647 \u0633\u0648\u0627\u0644 \u06cc\u0627 \u0646\u06cc\u0627\u0632 \u060c \u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0634\u0645\u0627\u0633\u062a."}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDialog__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDialog__VariantsArgs;
    args?: PlasmicDialog__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDialog__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDialog__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicDialog__ArgProps,
          internalVariantPropNames: PlasmicDialog__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDialog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDialog";
  } else {
    func.displayName = `PlasmicDialog.${nodeName}`;
  }
  return func;
}

export const PlasmicDialog = Object.assign(
  // Top-level PlasmicDialog renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicDialog
    internalVariantProps: PlasmicDialog__VariantProps,
    internalArgProps: PlasmicDialog__ArgProps
  }
);

export default PlasmicDialog;
/* prettier-ignore-end */