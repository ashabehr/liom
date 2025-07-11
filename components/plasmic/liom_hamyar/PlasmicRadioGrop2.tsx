/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: S5lwX58ZN_a3

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
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicRadioGrop2.module.css"; // plasmic-import: S5lwX58ZN_a3/css

createPlasmicElementProxy;

export type PlasmicRadioGrop2__VariantMembers = {
  selected: "selected";
  selectedLine: "selectedLine";
  disable: "disable";
  color: "light";
  style2: "line" | "grayBackgerand";
};
export type PlasmicRadioGrop2__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
  selectedLine?: SingleBooleanChoiceArg<"selectedLine">;
  disable?: SingleBooleanChoiceArg<"disable">;
  color?: SingleChoiceArg<"light">;
  style2?: SingleChoiceArg<"line" | "grayBackgerand">;
};
type VariantPropType = keyof PlasmicRadioGrop2__VariantsArgs;
export const PlasmicRadioGrop2__VariantProps = new Array<VariantPropType>(
  "selected",
  "selectedLine",
  "disable",
  "color",
  "style2"
);

export type PlasmicRadioGrop2__ArgsType = {
  onClick?: (event: any) => void;
  text?: string;
};
type ArgPropType = keyof PlasmicRadioGrop2__ArgsType;
export const PlasmicRadioGrop2__ArgProps = new Array<ArgPropType>(
  "onClick",
  "text"
);

export type PlasmicRadioGrop2__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultRadioGrop2Props {
  onClick?: (event: any) => void;
  text?: string;
  selected?: SingleBooleanChoiceArg<"selected">;
  selectedLine?: SingleBooleanChoiceArg<"selectedLine">;
  disable?: SingleBooleanChoiceArg<"disable">;
  color?: SingleChoiceArg<"light">;
  style2?: SingleChoiceArg<"line" | "grayBackgerand">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRadioGrop2__RenderFunc(props: {
  variants: PlasmicRadioGrop2__VariantsArgs;
  args: PlasmicRadioGrop2__ArgsType;
  overrides: PlasmicRadioGrop2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          text: "amiirrr"
        },
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
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
      },
      {
        path: "selectedLine",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selectedLine
      },
      {
        path: "disable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disable
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "style2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.style2
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
        sty.root,
        {
          [sty.rootcolor_light]: hasVariant($state, "color", "light"),
          [sty.rootdisable]: hasVariant($state, "disable", "disable"),
          [sty.rootselectedLine]: hasVariant(
            $state,
            "selectedLine",
            "selectedLine"
          ),
          [sty.rootselected]: hasVariant($state, "selected", "selected"),
          [sty.rootselected_color_light]:
            hasVariant($state, "color", "light") &&
            hasVariant($state, "selected", "selected"),
          [sty.rootstyle2_grayBackgerand]: hasVariant(
            $state,
            "style2",
            "grayBackgerand"
          ),
          [sty.rootstyle2_grayBackgerand_selected_color_light]:
            hasVariant($state, "color", "light") &&
            hasVariant($state, "selected", "selected") &&
            hasVariant($state, "style2", "grayBackgerand"),
          [sty.rootstyle2_line]: hasVariant($state, "style2", "line")
        }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["runOnClick"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onClick"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runOnClick"] != null &&
          typeof $steps["runOnClick"] === "object" &&
          typeof $steps["runOnClick"].then === "function"
        ) {
          $steps["runOnClick"] = await $steps["runOnClick"];
        }
      }}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxselected]: hasVariant($state, "selected", "selected")
        })}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textselected]: hasVariant($state, "selected", "selected"),
              [sty.textselected_color_light]:
                hasVariant($state, "color", "light") &&
                hasVariant($state, "selected", "selected"),
              [sty.textstyle2_grayBackgerand]: hasVariant(
                $state,
                "style2",
                "grayBackgerand"
              )
            }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.text;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "amittt";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRadioGrop2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRadioGrop2__VariantsArgs;
    args?: PlasmicRadioGrop2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRadioGrop2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRadioGrop2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRadioGrop2__ArgProps,
          internalVariantPropNames: PlasmicRadioGrop2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRadioGrop2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRadioGrop2";
  } else {
    func.displayName = `PlasmicRadioGrop2.${nodeName}`;
  }
  return func;
}

export const PlasmicRadioGrop2 = Object.assign(
  // Top-level PlasmicRadioGrop2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicRadioGrop2
    internalVariantProps: PlasmicRadioGrop2__VariantProps,
    internalArgProps: PlasmicRadioGrop2__ArgProps
  }
);

export default PlasmicRadioGrop2;
/* prettier-ignore-end */
