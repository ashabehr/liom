/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: CRVLEAaVQvJw

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

import { AntdSwitch } from "@plasmicpkgs/antd5/skinny/registerSwitch";

import { useScreenVariants as useScreenVariants_6BytLjmha8VC } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6BYTLjmha8vC/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicInformationBox.module.css"; // plasmic-import: CRVLEAaVQvJw/css

import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: 32haUKsu6raY/icon

createPlasmicElementProxy;

export type PlasmicInformationBox__VariantMembers = {};
export type PlasmicInformationBox__VariantsArgs = {};
type VariantPropType = keyof PlasmicInformationBox__VariantsArgs;
export const PlasmicInformationBox__VariantProps = new Array<VariantPropType>();

export type PlasmicInformationBox__ArgsType = {
  userId?: string;
  title?: string;
  text?: string;
  btn1?: any;
  btn2?: any;
  onClickBtn1?: (event: any) => void;
  onClickBtn2?: (event: any) => void;
  onClickClose?: (event: any) => void;
  backColor?: string;
};
type ArgPropType = keyof PlasmicInformationBox__ArgsType;
export const PlasmicInformationBox__ArgProps = new Array<ArgPropType>(
  "userId",
  "title",
  "text",
  "btn1",
  "btn2",
  "onClickBtn1",
  "onClickBtn2",
  "onClickClose",
  "backColor"
);

export type PlasmicInformationBox__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  _switch?: Flex__<typeof AntdSwitch>;
  switch2?: Flex__<typeof AntdSwitch>;
};

export interface DefaultInformationBoxProps {
  userId?: string;
  title?: string;
  text?: string;
  btn1?: any;
  btn2?: any;
  onClickBtn1?: (event: any) => void;
  onClickBtn2?: (event: any) => void;
  onClickClose?: (event: any) => void;
  backColor?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInformationBox__RenderFunc(props: {
  variants: PlasmicInformationBox__VariantsArgs;
  args: PlasmicInformationBox__ArgsType;
  overrides: PlasmicInformationBox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          userId: "4ddd1fab-100c-49f0-b843-e70bff8add34",
          title: "\u06cc\u0628\u06cc\u0633\u0628",
          text: "\u0628\u06cc\u0628\u06cc\u0633\u0628\u06cc",
          btn1: {
            text: "aaa",
            backColor: "#ffffff",
            textColor: "#000000",
            type: "switch",
            isChecked: true,
            borderColor: "#000000"
          },
          btn2: {
            text: "aaa2",
            backColor: "#ffffff",
            textColor: "#000000",
            type: "text",
            isChecked: false
          }
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
        path: "_switch.checked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.btn1.isChecked;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "switch2.checked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.btn2.isChecked;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
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
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ej0Pr)}
        style={(() => {
          try {
            return {
              "background-color":
                $props.backColor == "" ? "#CDF6E6" : $props.backColor
            };
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__kM61V)}
          onClick={args.onClickClose}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yfIw
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.title;
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
          </div>
          <Icon22Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qoH7V
          )}
        >
          <div
            className={projectcss.__wab_expr_html_text}
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  return $props.text;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()
            }}
          />
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__yshm8)}
        >
          {(() => {
            try {
              return $props.btn1?.text != "";
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
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vHEq)}
              onClick={args.onClickBtn1}
              style={(() => {
                try {
                  return {
                    "background-color": $props.btn1.backColor,
                    border: "1px solid " + $props.btn1.borderColor
                  };
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jjKj
                )}
                style={(() => {
                  try {
                    return { color: $props.btn1.textColor };
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.btn1.text;
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
              </div>
              {(() => {
                try {
                  return $props.btn1.type == "switch";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return false;
                  }
                  throw e;
                }
              })() ? (
                <AntdSwitch
                  data-plasmic-name={"_switch"}
                  data-plasmic-override={overrides._switch}
                  checked={generateStateValueProp($state, [
                    "_switch",
                    "checked"
                  ])}
                  className={classNames("__wab_instance", sty._switch)}
                  defaultChecked={(() => {
                    try {
                      return $props.btn1.isChecked;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  disabled={false}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "_switch",
                      "checked"
                    ]).apply(null, eventArgs);

                    (async checked => {
                      const $steps = {};

                      $steps["updateSwitchChecked"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["_switch", "checked"]
                              },
                              operation: 0,
                              value: $props.btn1.isChecked
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;

                              $stateSet(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateSwitchChecked"] != null &&
                        typeof $steps["updateSwitchChecked"] === "object" &&
                        typeof $steps["updateSwitchChecked"].then === "function"
                      ) {
                        $steps["updateSwitchChecked"] = await $steps[
                          "updateSwitchChecked"
                        ];
                      }
                    }).apply(null, eventArgs);
                  }}
                />
              ) : null}
            </Stack__>
          ) : null}
          {(() => {
            try {
              return $props.btn2?.text != "";
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
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dzSt5)}
              onClick={args.onClickBtn2}
              style={(() => {
                try {
                  return {
                    "background-color": $props.btn2.backColor,
                    border: "1px solid " + $props.btn2.borderColor
                  };
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p0I7S
                )}
                style={(() => {
                  try {
                    return { color: $props.btn2.textColor };
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.btn2.text;
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
              </div>
              {(() => {
                try {
                  return $props.btn2.type == "switch";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return false;
                  }
                  throw e;
                }
              })() ? (
                <AntdSwitch
                  data-plasmic-name={"switch2"}
                  data-plasmic-override={overrides.switch2}
                  checked={generateStateValueProp($state, [
                    "switch2",
                    "checked"
                  ])}
                  className={classNames("__wab_instance", sty.switch2)}
                  defaultChecked={(() => {
                    try {
                      return $props.btn2.isChecked;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "switch2",
                      "checked"
                    ]).apply(null, eventArgs);

                    (async checked => {
                      const $steps = {};

                      $steps["updateSwitchChecked"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["_switch", "checked"]
                              },
                              operation: 0,
                              value: $props.btn2.isChecked
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;

                              $stateSet(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateSwitchChecked"] != null &&
                        typeof $steps["updateSwitchChecked"] === "object" &&
                        typeof $steps["updateSwitchChecked"].then === "function"
                      ) {
                        $steps["updateSwitchChecked"] = await $steps[
                          "updateSwitchChecked"
                        ];
                      }
                    }).apply(null, eventArgs);
                  }}
                />
              ) : null}
            </Stack__>
          ) : null}
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "_switch", "switch2"],
  svg: ["svg"],
  _switch: ["_switch"],
  switch2: ["switch2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  _switch: typeof AntdSwitch;
  switch2: typeof AntdSwitch;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInformationBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInformationBox__VariantsArgs;
    args?: PlasmicInformationBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInformationBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInformationBox__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicInformationBox__ArgProps,
          internalVariantPropNames: PlasmicInformationBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInformationBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInformationBox";
  } else {
    func.displayName = `PlasmicInformationBox.${nodeName}`;
  }
  return func;
}

export const PlasmicInformationBox = Object.assign(
  // Top-level PlasmicInformationBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    _switch: makeNodeComponent("_switch"),
    switch2: makeNodeComponent("switch2"),

    // Metadata about props expected for PlasmicInformationBox
    internalVariantProps: PlasmicInformationBox__VariantProps,
    internalArgProps: PlasmicInformationBox__ArgProps
  }
);

export default PlasmicInformationBox;
/* prettier-ignore-end */
