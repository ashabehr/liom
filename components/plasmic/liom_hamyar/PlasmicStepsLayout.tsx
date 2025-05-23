/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: dHc4RrEGN9st

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

import LineClomp2 from "../../LineClomp2"; // plasmic-import: zuZ91wbmspN9/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicStepsLayout.module.css"; // plasmic-import: dHc4RrEGN9st/css

import Icon77Icon from "./icons/PlasmicIcon__Icon77"; // plasmic-import: wjMNvLG8jaXy/icon
import Icon174Icon from "./icons/PlasmicIcon__Icon174"; // plasmic-import: js1F4yxsXuC5/icon

createPlasmicElementProxy;

export type PlasmicStepsLayout__VariantMembers = {
  layout: "card" | "banner" | "advice";
};
export type PlasmicStepsLayout__VariantsArgs = {
  layout?: SingleChoiceArg<"card" | "banner" | "advice">;
};
type VariantPropType = keyof PlasmicStepsLayout__VariantsArgs;
export const PlasmicStepsLayout__VariantProps = new Array<VariantPropType>(
  "layout"
);

export type PlasmicStepsLayout__ArgsType = {
  children?: React.ReactNode;
  slot2?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicStepsLayout__ArgsType;
export const PlasmicStepsLayout__ArgProps = new Array<ArgPropType>(
  "children",
  "slot2",
  "slot"
);

export type PlasmicStepsLayout__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultStepsLayoutProps {
  children?: React.ReactNode;
  slot2?: React.ReactNode;
  slot?: React.ReactNode;
  layout?: SingleChoiceArg<"card" | "banner" | "advice">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStepsLayout__RenderFunc(props: {
  variants: PlasmicStepsLayout__VariantsArgs;
  args: PlasmicStepsLayout__ArgsType;
  overrides: PlasmicStepsLayout__OverridesType;
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
        path: "layout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.layout
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
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootlayout_advice]: hasVariant($state, "layout", "advice"),
          [sty.rootlayout_banner]: hasVariant($state, "layout", "banner"),
          [sty.rootlayout_card]: hasVariant($state, "layout", "card")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__zt0Vx, {
          [sty.freeBoxlayout_advice__zt0Vx7UPUl]: hasVariant(
            $state,
            "layout",
            "advice"
          ),
          [sty.freeBoxlayout_banner__zt0VxMactE]: hasVariant(
            $state,
            "layout",
            "banner"
          ),
          [sty.freeBoxlayout_card__zt0Vxy37H]: hasVariant(
            $state,
            "layout",
            "card"
          )
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__fgFjT, {
            [sty.freeBoxlayout_card__fgFjTy37H]: hasVariant(
              $state,
              "layout",
              "card"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__buiqz,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__jf3Xt,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox___944B,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__mzxb4,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__nusse,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__iygjz,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__q9Xoc,
              "shimmer"
            )}
          />
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mhUnt)}
        >
          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__o3Jq4,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__wowVb,
              "shimmer"
            )}
          />

          <div
            className={classNames(projectcss.all, sty.freeBox__ap8I, "shimmer")}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__j9BAz,
              "shimmer"
            )}
          />

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___9WbtW)}
          >
            <div
              className={classNames(
                projectcss.all,
                sty.freeBox__maBv8,
                "shimmer"
              )}
            />

            <div
              className={classNames(
                projectcss.all,
                sty.freeBox__dBW,
                "shimmer"
              )}
            />

            <div
              className={classNames(
                projectcss.all,
                sty.freeBox__f54ED,
                "shimmer"
              )}
            />
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__boooa)}
        >
          <div
            className={classNames(
              projectcss.all,
              sty.freeBox___7Kw95,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox___8InKb,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__zW5Kc,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__b5Qc7,
              "shimmer"
            )}
          />

          <div
            className={classNames(projectcss.all, sty.freeBox__mQgK, "shimmer")}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__g2Rtg,
              "shimmer"
            )}
          />

          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__wfjJy,
              "shimmer"
            )}
          />
        </Stack__>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pHwLy, {
          [sty.freeBoxlayout_advice__pHwLy7UPUl]: hasVariant(
            $state,
            "layout",
            "advice"
          ),
          [sty.freeBoxlayout_banner__pHwLyMactE]: hasVariant(
            $state,
            "layout",
            "banner"
          ),
          [sty.freeBoxlayout_card__pHwLyy37H]: hasVariant(
            $state,
            "layout",
            "card"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k21NT
                )}
              >
                {"sjdiuhvv"}
              </div>
              <LineClomp2
                className={classNames("__wab_instance", sty.lineClomp2__fb7Vm)}
                more={true}
                numberOfLine={2}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__es7DU
                  )}
                >
                  {
                    "sddddddddddddddddddddddddddddddddddddddd\u0633\u062a\u0628\u0647\u0633\u0627\u06cc\u0647\u0639\u0628\u0627\u0647\u06cc\u0639\u0633\u0627\u0628\u0647\u0627\u0647 \u0627\u06cc\u0633\u0647\u0639\u062e\u0627\u0628\u0647\u0639\u0627\u0633\u06cc\u0647\u0639\u0628\u0627\u0647\u0627\u0647\u0627\u0647\u0627\u0628 \u062f\u0633\u062e\u06cc\u062a\u0633\u0639\u0647\u0627\u0647\u0639\u06cc\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0628 \u0633\u062a\u06cc\u0647\u062e\u0639\u062a\u0639\u0647\u062a\u0647\u0639\u062e\u062a\u0633\u062e\u062a\u062e\u062a\u0628 \u0633\u062f\u0627\u0639\u06cc\u0647\u0627\u0647\u0639\u0627\u0628\u0647\u0639\u0627\u0628\u0647\u0627\u0627\u0647\u0639\u0633\u0627 \u062f\u0633\u062e\u06cc\u0627\u0639\u062e\u0647\u0627\u0633\u0639\u0627\u0628\u0627\u0639\u0647\u06cc\u0633\u0627\u0628\u0639\u0647\u0633\u0627\u0628\u0633"
                  }
                </div>
              </LineClomp2>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rg8NU)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__jgooe)}
                  displayHeight={"4rem"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"4rem"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/liom_hamyar/images/bitmap.png",
                    fullWidth: 612,
                    fullHeight: 459,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rZt8A)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__iWkfp)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dm6Gr
                      )}
                    >
                      {"Enter some text"}
                    </div>
                    <Icon77Icon
                      className={classNames(projectcss.all, sty.svg__v9Jx)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1XAl6
                      )}
                    >
                      {"\u0646\u0627\u0647\u0627\u0631"}
                    </div>
                  </Stack__>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__v1Alr
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </Stack__>
              </Stack__>
            </React.Fragment>
          ),
          value: args.children
        })}
      </Stack__>
      {(
        hasVariant($state, "layout", "advice")
          ? true
          : hasVariant($state, "layout", "card")
          ? true
          : false
      ) ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ueRlj, {
            [sty.freeBoxlayout_advice__ueRlj7UPUl]: hasVariant(
              $state,
              "layout",
              "advice"
            ),
            [sty.freeBoxlayout_banner__ueRljMactE]: hasVariant(
              $state,
              "layout",
              "banner"
            ),
            [sty.freeBoxlayout_card__ueRljy37H]: hasVariant(
              $state,
              "layout",
              "card"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ypqt2
                  )}
                >
                  {"sjdiuhvv"}
                </div>
                <LineClomp2
                  className={classNames(
                    "__wab_instance",
                    sty.lineClomp2__r6PyU
                  )}
                  more={true}
                  numberOfLine={2}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kiEa
                    )}
                  >
                    {
                      "sddddddddddddddddddddddddddddddddddddddd\u0633\u062a\u0628\u0647\u0633\u0627\u06cc\u0647\u0639\u0628\u0627\u0647\u06cc\u0639\u0633\u0627\u0628\u0647\u0627\u0647 \u0627\u06cc\u0633\u0647\u0639\u062e\u0627\u0628\u0647\u0639\u0627\u0633\u06cc\u0647\u0639\u0628\u0627\u0647\u0627\u0647\u0627\u0647\u0627\u0628 \u062f\u0633\u062e\u06cc\u062a\u0633\u0639\u0647\u0627\u0647\u0639\u06cc\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0628 \u0633\u062a\u06cc\u0647\u062e\u0639\u062a\u0639\u0647\u062a\u0647\u0639\u062e\u062a\u0633\u062e\u062a\u062e\u062a\u0628 \u0633\u062f\u0627\u0639\u06cc\u0647\u0627\u0647\u0639\u0627\u0628\u0647\u0639\u0627\u0628\u0647\u0627\u0627\u0647\u0639\u0633\u0627 \u062f\u0633\u062e\u06cc\u0627\u0639\u062e\u0647\u0627\u0633\u0639\u0627\u0628\u0627\u0639\u0647\u06cc\u0633\u0627\u0628\u0639\u0647\u0633\u0627\u0628\u0633"
                    }
                  </div>
                </LineClomp2>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__l9Jy)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__eprGr)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__r6Sr)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__gzJEc
                        )}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ygOrD
                        )}
                      >
                        {"Enter some text"}
                      </div>
                    </Stack__>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__h1PC6)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xxgGp
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ct4X
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wWeBd
                            )}
                          >
                            {"Enter some text"}
                          </div>
                        </Stack__>
                      </Stack__>
                    </div>
                  </div>
                </Stack__>
              </React.Fragment>
            ),
            value: args.slot2
          })}
        </Stack__>
      ) : null}
      {(
        hasVariant($state, "layout", "banner")
          ? true
          : hasVariant($state, "layout", "card")
          ? true
          : false
      ) ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ciBcx, {
            [sty.freeBoxlayout_banner__ciBcxMactE]: hasVariant(
              $state,
              "layout",
              "banner"
            ),
            [sty.freeBoxlayout_card__ciBcxy37H]: hasVariant(
              $state,
              "layout",
              "card"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tkAie
                  )}
                >
                  {"sjdiuhvv"}
                </div>
                <LineClomp2
                  className={classNames(
                    "__wab_instance",
                    sty.lineClomp2__xzkHt
                  )}
                  more={true}
                  numberOfLine={2}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__er5Bf
                    )}
                  >
                    {
                      "sddddddddddddddddddddddddddddddddddddddd\u0633\u062a\u0628\u0647\u0633\u0627\u06cc\u0647\u0639\u0628\u0627\u0647\u06cc\u0639\u0633\u0627\u0628\u0647\u0627\u0647 \u0627\u06cc\u0633\u0647\u0639\u062e\u0627\u0628\u0647\u0639\u0627\u0633\u06cc\u0647\u0639\u0628\u0627\u0647\u0627\u0647\u0627\u0647\u0627\u0628 \u062f\u0633\u062e\u06cc\u062a\u0633\u0639\u0647\u0627\u0647\u0639\u06cc\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0628 \u0633\u062a\u06cc\u0647\u062e\u0639\u062a\u0639\u0647\u062a\u0647\u0639\u062e\u062a\u0633\u062e\u062a\u062e\u062a\u0628 \u0633\u062f\u0627\u0639\u06cc\u0647\u0627\u0647\u0639\u0627\u0628\u0647\u0639\u0627\u0628\u0647\u0627\u0627\u0647\u0639\u0633\u0627 \u062f\u0633\u062e\u06cc\u0627\u0639\u062e\u0647\u0627\u0633\u0639\u0627\u0628\u0627\u0639\u0647\u06cc\u0633\u0627\u0628\u0639\u0647\u0633\u0627\u0628\u0633"
                    }
                  </div>
                </LineClomp2>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yeAv8)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__t51UD)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___7FaVp)}
                      displayHeight={"8rem"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"13.5rem"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/liom_hamyar/images/newProject1Png.png",
                        fullWidth: 1080,
                        fullHeight: 764,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__foJba)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__mhJwC
                        )}
                      >
                        <Icon174Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___2Qsm5
                          )}
                          role={"img"}
                        />
                      </div>
                    </div>
                  </div>
                </Stack__>
              </React.Fragment>
            ),
            value: args.slot
          })}
        </Stack__>
      ) : null}
    </Stack__>
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
  PlasmicStepsLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStepsLayout__VariantsArgs;
    args?: PlasmicStepsLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStepsLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicStepsLayout__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicStepsLayout__ArgProps,
          internalVariantPropNames: PlasmicStepsLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStepsLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStepsLayout";
  } else {
    func.displayName = `PlasmicStepsLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicStepsLayout = Object.assign(
  // Top-level PlasmicStepsLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicStepsLayout
    internalVariantProps: PlasmicStepsLayout__VariantProps,
    internalArgProps: PlasmicStepsLayout__ArgProps
  }
);

export default PlasmicStepsLayout;
/* prettier-ignore-end */
