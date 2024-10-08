// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: xI5TnebPGhVr

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

import { AntdSingleCollapse } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { singleCollapseHelpers as AntdSingleCollapse_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";

import { useScreenVariants as useScreenVariants_6BytLjmha8VC } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6BYTLjmha8vC/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicNotifBox.module.css"; // plasmic-import: xI5TnebPGhVr/css

createPlasmicElementProxy;

export type PlasmicNotifBox__VariantMembers = {
  seen: "seen";
};
export type PlasmicNotifBox__VariantsArgs = {
  seen?: SingleBooleanChoiceArg<"seen">;
};
type VariantPropType = keyof PlasmicNotifBox__VariantsArgs;
export const PlasmicNotifBox__VariantProps = new Array<VariantPropType>("seen");

export type PlasmicNotifBox__ArgsType = {
  onSeenChange?: (val: any) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  text?: string;
  onTextChange?: (val: string) => void;
  date?: string;
  onDateChange?: (val: string) => void;
  open?: boolean;
  onChange?: (activeIds: any) => void;
};
type ArgPropType = keyof PlasmicNotifBox__ArgsType;
export const PlasmicNotifBox__ArgProps = new Array<ArgPropType>(
  "onSeenChange",
  "title",
  "onTitleChange",
  "text",
  "onTextChange",
  "date",
  "onDateChange",
  "open",
  "onChange"
);

export type PlasmicNotifBox__OverridesType = {
  root?: Flex__<"div">;
  collapse?: Flex__<typeof AntdSingleCollapse>;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultNotifBoxProps {
  onSeenChange?: (val: any) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  text?: string;
  onTextChange?: (val: string) => void;
  date?: string;
  onDateChange?: (val: string) => void;
  open?: boolean;
  onChange?: (activeIds: any) => void;
  seen?: SingleBooleanChoiceArg<"seen">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNotifBox__RenderFunc(props: {
  variants: PlasmicNotifBox__VariantsArgs;
  args: PlasmicNotifBox__ArgsType;
  overrides: PlasmicNotifBox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          open: false
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
        path: "seen",
        type: "writable",
        variableType: "variant",

        valueProp: "seen",
        onChangeProp: "onSeenChange"
      },
      {
        path: "collapse.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props["open"],

        onMutate: generateOnMutateForSpec("open", AntdSingleCollapse_Helpers)
      },
      {
        path: "title",
        type: "writable",
        variableType: "text",

        valueProp: "title",
        onChangeProp: "onTitleChange"
      },
      {
        path: "text",
        type: "writable",
        variableType: "text",

        valueProp: "text",
        onChangeProp: "onTextChange"
      },
      {
        path: "date",
        type: "writable",
        variableType: "text",

        valueProp: "date",
        onChangeProp: "onDateChange"
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6BytLjmha8VC()
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
        { [sty.rootseen]: hasVariant($state, "seen", "seen") }
      )}
    >
      {(() => {
        const child$Props = {
          bordered: true,
          className: classNames("__wab_instance", sty.collapse, {
            [sty.collapseseen]: hasVariant($state, "seen", "seen")
          }),
          defaultOpen: args.open,
          expandIcon: null,
          expandIconPosition: "end",
          ghost: true,
          headerClass: classNames({ [sty["pcls_hM-HJRo8TQiR"]]: true }),
          label2: (
            <div
              className={classNames(projectcss.all, sty.freeBox___5FqYh, {
                [sty.freeBoxseen___5FqYhofXyw]: hasVariant(
                  $state,
                  "seen",
                  "seen"
                )
              })}
            >
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img, {
                  [sty.imgseen]: hasVariant($state, "seen", "seen")
                })}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? "25px"
                    : "30px"
                }
                displayMaxHeight={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? "100%"
                    : "100%"
                }
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? "25px"
                    : "30px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/liom_hamyar/images/image10.ico",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(projectcss.all, sty.freeBox__lpV3T, {
                  [sty.freeBoxseen__lpV3TofXyw]: hasVariant(
                    $state,
                    "seen",
                    "seen"
                  )
                })}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox__d92Y7, {
                    [sty.freeBoxseen__d92Y7OfXyw]: hasVariant(
                      $state,
                      "seen",
                      "seen"
                    )
                  })}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nFhjh,
                      {
                        [sty.textseen__nFhjhofXyw]: hasVariant(
                          $state,
                          "seen",
                          "seen"
                        )
                      }
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile") ? (
                      <React.Fragment>
                        {(() => {
                          try {
                            return $state.title;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {(() => {
                          try {
                            return $state.title;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    )}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6Tjo,
                      {
                        [sty.textseen___6TjoOfXyw]: hasVariant(
                          $state,
                          "seen",
                          "seen"
                        )
                      }
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile") ? (
                      <React.Fragment>
                        {(() => {
                          try {
                            return $state.date;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "1403/02/05";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {(() => {
                          try {
                            return $state.date;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ),
          onChange: async (...eventArgs: any) => {
            generateStateOnChangePropForCodeComponents(
              $state,
              "open",
              ["collapse", "open"],
              AntdSingleCollapse_Helpers
            ).apply(null, eventArgs);
            args.onChange.apply(null, eventArgs);
          },
          open: generateStateValueProp($state, ["collapse", "open"]),
          showArrow: true,
          size: hasVariant(globalVariants, "screen", "mobile")
            ? "small"
            : "large"
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "open",
              plasmicStateName: "collapse.open"
            }
          ],
          [],
          AntdSingleCollapse_Helpers ?? {},
          child$Props
        );

        return (
          <AntdSingleCollapse
            data-plasmic-name={"collapse"}
            data-plasmic-override={overrides.collapse}
            {...child$Props}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__v0Ba,
                {
                  [sty.textseen__v0BaofXyw]: hasVariant($state, "seen", "seen")
                }
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile") ? (
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.text;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Collapsible text...";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.text;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Collapsible text...";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              )}
            </div>
          </AntdSingleCollapse>
        );
      })()}
      <div
        className={classNames(projectcss.all, sty.freeBox__cebvZ, {
          [sty.freeBoxseen__cebvZofXyw]: hasVariant($state, "seen", "seen")
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "collapse", "img"],
  collapse: ["collapse", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  collapse: typeof AntdSingleCollapse;
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNotifBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNotifBox__VariantsArgs;
    args?: PlasmicNotifBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNotifBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNotifBox__ArgsType,
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
          internalArgPropNames: PlasmicNotifBox__ArgProps,
          internalVariantPropNames: PlasmicNotifBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNotifBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNotifBox";
  } else {
    func.displayName = `PlasmicNotifBox.${nodeName}`;
  }
  return func;
}

export const PlasmicNotifBox = Object.assign(
  // Top-level PlasmicNotifBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    collapse: makeNodeComponent("collapse"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNotifBox
    internalVariantProps: PlasmicNotifBox__VariantProps,
    internalArgProps: PlasmicNotifBox__ArgProps
  }
);

export default PlasmicNotifBox;
/* prettier-ignore-end */
