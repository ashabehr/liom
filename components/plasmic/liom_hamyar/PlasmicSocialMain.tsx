/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: dIQxBnzf8Ez0

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import Story from "../../Story"; // plasmic-import: SYaNz6kkwV8r/component
import Type from "../../Type"; // plasmic-import: 0PNG5HW8802G/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicSocialMain.module.css"; // plasmic-import: dIQxBnzf8Ez0/css

createPlasmicElementProxy;

export type PlasmicSocialMain__VariantMembers = {};
export type PlasmicSocialMain__VariantsArgs = {};
type VariantPropType = keyof PlasmicSocialMain__VariantsArgs;
export const PlasmicSocialMain__VariantProps = new Array<VariantPropType>();

export type PlasmicSocialMain__ArgsType = {};
type ArgPropType = keyof PlasmicSocialMain__ArgsType;
export const PlasmicSocialMain__ArgProps = new Array<ArgPropType>();

export type PlasmicSocialMain__OverridesType = {
  root?: Flex__<"div">;
  headerSocial?: Flex__<"div">;
  text?: Flex__<"div">;
  story?: Flex__<"div">;
  groupBy?: Flex__<"div">;
  type?: Flex__<typeof Type>;
  getInfo?: Flex__<typeof DataFetcher>;
};

export interface DefaultSocialMainProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSocialMain__RenderFunc(props: {
  variants: PlasmicSocialMain__VariantsArgs;
  args: PlasmicSocialMain__ArgsType;
  overrides: PlasmicSocialMain__OverridesType;
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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div className={classNames(projectcss.all, sty.freeBox__m2Hyo)}>
            <div
              data-plasmic-name={"headerSocial"}
              data-plasmic-override={overrides.headerSocial}
              className={classNames(projectcss.all, sty.headerSocial)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___3Ggli)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__jcMgv)}>
                  <svg
                    className={classNames(projectcss.all, sty.svg__k05M)}
                    role={"img"}
                  />
                </div>
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Enter some text"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___4Bgn1)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__ufykt)}>
                  <svg
                    className={classNames(projectcss.all, sty.svg__e7Ln2)}
                    role={"img"}
                  />
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___4Pi0E)}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__gGyXh)}
                    role={"img"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__tjxlw)}>
                  <svg
                    className={classNames(projectcss.all, sty.svg__nafDg)}
                    role={"img"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__egJpI)}>
                  <svg
                    className={classNames(projectcss.all, sty.svg__fAha)}
                    role={"img"}
                  />
                </div>
              </Stack__>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___2BKpP)}>
            <Stack__
              as={"div"}
              data-plasmic-name={"story"}
              data-plasmic-override={overrides.story}
              hasGap={true}
              className={classNames(projectcss.all, sty.story)}
            >
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return [
                      2,
                      3,
                      4,
                      ,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      22,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      22,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      2,
                      22
                    ];
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()
              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (
                  <Story
                    className={classNames("__wab_instance", sty.story__sYbB)}
                    key={currentIndex}
                  />
                );
              })}
            </Stack__>
            <div
              data-plasmic-name={"groupBy"}
              data-plasmic-override={overrides.groupBy}
              className={classNames(projectcss.all, sty.groupBy)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__leuuy)}
              >
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))([
                  2, 3, 4
                ]).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <Type
                      data-plasmic-name={"type"}
                      data-plasmic-override={overrides.type}
                      className={classNames("__wab_instance", sty.type)}
                      key={currentIndex}
                    />
                  );
                })}
              </Stack__>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__rjNb)}>
            <div className={classNames(projectcss.all, sty.freeBox__ybpyR)} />
          </div>
          <DataFetcher
            data-plasmic-name={"getInfo"}
            data-plasmic-override={overrides.getInfo}
            body={(() => {
              try {
                return undefined;
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
            className={classNames("__wab_instance", sty.getInfo)}
            dataName={"fetchedData"}
            errorDisplay={
              <DataCtxReader__>{$ctx => "Error fetching data"}</DataCtxReader__>
            }
            errorName={"fetchError"}
            loadingDisplay={
              <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
            }
            method={"GET"}
            noLayout={false}
            url={"https://n8n.staas.ir/webhook/rest/social"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__ggOLq)} />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "headerSocial", "text", "story", "groupBy", "type", "getInfo"],
  headerSocial: ["headerSocial", "text"],
  text: ["text"],
  story: ["story"],
  groupBy: ["groupBy", "type"],
  type: ["type"],
  getInfo: ["getInfo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerSocial: "div";
  text: "div";
  story: "div";
  groupBy: "div";
  type: typeof Type;
  getInfo: typeof DataFetcher;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSocialMain__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSocialMain__VariantsArgs;
    args?: PlasmicSocialMain__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSocialMain__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSocialMain__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSocialMain__ArgProps,
          internalVariantPropNames: PlasmicSocialMain__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSocialMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSocialMain";
  } else {
    func.displayName = `PlasmicSocialMain.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "suVPi77vb6vv9K5rYJwyxC"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicSocialMain = Object.assign(
  // Top-level PlasmicSocialMain renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    headerSocial: makeNodeComponent("headerSocial"),
    text: makeNodeComponent("text"),
    story: makeNodeComponent("story"),
    groupBy: makeNodeComponent("groupBy"),
    type: makeNodeComponent("type"),
    getInfo: makeNodeComponent("getInfo"),

    // Metadata about props expected for PlasmicSocialMain
    internalVariantProps: PlasmicSocialMain__VariantProps,
    internalArgProps: PlasmicSocialMain__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSocialMain;
/* prettier-ignore-end */
