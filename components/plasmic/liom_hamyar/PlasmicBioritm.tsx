// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: u78Ppal5dPeL

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

import Button from "../../Button"; // plasmic-import: ErJEaLhimwjN/component
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import { useScreenVariants as useScreenVariants_6BytLjmha8VC } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6BYTLjmha8vC/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicBioritm.module.css"; // plasmic-import: u78Ppal5dPeL/css

import CheckSvgIcon from "../todo_mvc_app/icons/PlasmicIcon__CheckSvg"; // plasmic-import: rMWZc9fpVIkj/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: 8DTE5iQ0tvze/icon

createPlasmicElementProxy;

export type PlasmicBioritm__VariantMembers = {};
export type PlasmicBioritm__VariantsArgs = {};
type VariantPropType = keyof PlasmicBioritm__VariantsArgs;
export const PlasmicBioritm__VariantProps = new Array<VariantPropType>();

export type PlasmicBioritm__ArgsType = {};
type ArgPropType = keyof PlasmicBioritm__ArgsType;
export const PlasmicBioritm__ArgProps = new Array<ArgPropType>();

export type PlasmicBioritm__OverridesType = {
  root?: Flex__<"div">;
  button2?: Flex__<typeof Button>;
  button3?: Flex__<typeof Button>;
  h2?: Flex__<"h2">;
  ul?: Flex__<"ul">;
  modal?: Flex__<typeof AntdModal>;
  modal2?: Flex__<typeof AntdModal>;
  button?: Flex__<typeof Button>;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultBioritmProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBioritm__RenderFunc(props: {
  variants: PlasmicBioritm__VariantsArgs;
  args: PlasmicBioritm__ArgsType;
  overrides: PlasmicBioritm__OverridesType;
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
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "modal2.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "button.color",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "button2.color",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "softSand"
      },
      {
        path: "button3.color",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "perper"
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
          <div className={classNames(projectcss.all, sty.freeBox__l2VNg)}>
            <div className={classNames(projectcss.all, sty.freeBox__kQaHu)}>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__f1TwP
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateModalOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["modal", "open"]
                          },
                          operation: 0,
                          value: true
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
                    $steps["updateModalOpen"] != null &&
                    typeof $steps["updateModalOpen"] === "object" &&
                    typeof $steps["updateModalOpen"].then === "function"
                  ) {
                    $steps["updateModalOpen"] = await $steps["updateModalOpen"];
                  }
                }}
                platform={"nextjs"}
              >
                {
                  "\u0628\u06cc\u0648\u0631\u06cc\u062a\u0645 \u0686\u06cc\u0633\u062a\u061f"
                }
              </PlasmicLink__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eeRlb)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__mB5CK)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__i9991
                    )}
                  >
                    {"\u0641\u06a9\u0631\u06cc"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zd6RW
                    )}
                  >
                    {"50%"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__euqJ7)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Kkag
                    )}
                  >
                    {"\u062c\u0633\u0645\u06cc"}
                  </div>
                  {(
                    hasVariant(globalVariants, "screen", "mobile")
                      ? true
                      : false
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__n2Lt
                      )}
                    >
                      {"50%"}
                    </div>
                  ) : null}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__vmLw3)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6YrHy
                    )}
                  >
                    {"\u0627\u062d\u0633\u0627\u0633\u06cc"}
                  </div>
                  {(
                    hasVariant(globalVariants, "screen", "mobile")
                      ? true
                      : false
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__o2VP9
                      )}
                    >
                      {"50%"}
                    </div>
                  ) : null}
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox__zqEyN)}>
                <p
                  className={classNames(
                    projectcss.all,
                    projectcss.p,
                    projectcss.__wab_text,
                    sty.p__wBrRt
                  )}
                >
                  {"\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646"}
                </p>
                <p
                  className={classNames(
                    projectcss.all,
                    projectcss.p,
                    projectcss.__wab_text,
                    sty.p__xLc5O
                  )}
                >
                  {""}
                </p>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___6Kw2M)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3Hd4I
                  )}
                >
                  {"22 \u0645\u0631\u062f\u0627\u062f 1403"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__kcgv6)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__omFzt
                  )}
                >
                  {
                    "\u0627\u06cc\u0646 \u0628\u06cc\u0648 \u0631\u06cc\u062a\u0645 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f "
                  }
                </div>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__tcL6R
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return (
                          $state.datePickers.value.year +
                          "/" +
                          $state.datePickers.value.month +
                          "/" +
                          $state.datePickers.value.day
                        );
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "1380/8/9";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </PlasmicLink__>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dQjfV
                  )}
                >
                  {
                    " \u0645\u062d\u0627\u0633\u0628\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a ."
                  }
                </div>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__q8Qw)}
              >
                <Button
                  data-plasmic-name={"button2"}
                  data-plasmic-override={overrides.button2}
                  className={classNames("__wab_instance", sty.button2)}
                  color={generateStateValueProp($state, ["button2", "color"])}
                  onColorChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ["button2", "color"])(
                      eventArgs[0]
                    );
                  }}
                >
                  {
                    "\u062a\u063a\u06cc\u06cc\u0631 \u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f"
                  }
                </Button>
                {(
                  hasVariant(globalVariants, "screen", "mobile") ? true : false
                ) ? (
                  <Button
                    data-plasmic-name={"button3"}
                    data-plasmic-override={overrides.button3}
                    className={classNames("__wab_instance", sty.button3)}
                    color={generateStateValueProp($state, ["button3", "color"])}
                    onColorChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["button3", "color"])(
                        eventArgs[0]
                      );
                    }}
                  >
                    {
                      "\u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0631\u06cc"
                    }
                  </Button>
                ) : null}
              </Stack__>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__dx6At)}>
              <div className={classNames(projectcss.all, sty.freeBox__eoCeA)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {
                    "\u062a\u0648\u0635\u06cc\u0647 \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u0628\u06cc\u0648\u0631\u06cc\u062a\u0645 \u0627\u0645\u0631\u0648\u0632:"
                  }
                </h2>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___4Cio4)}>
                <Stack__
                  as={"ul"}
                  data-plasmic-name={"ul"}
                  data-plasmic-override={overrides.ul}
                  hasGap={true}
                  className={classNames(projectcss.all, projectcss.ul, sty.ul)}
                >
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__u9LKw
                    )}
                  >
                    {
                      "\u0627\u0645\u0631\u0648\u0632 \u062e\u0644\u0627\u0642\u06cc"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__woGd
                    )}
                  >
                    {
                      "\u0627\u0645\u0631\u0648\u0632 \u062e\u0644\u0627\u0642\u06cc"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li___3Xx7K
                    )}
                  >
                    {
                      "\u0627\u0645\u0631\u0648\u0632 \u062e\u0644\u0627\u0642\u06cc"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__mwxvF
                    )}
                  >
                    {
                      "\u0627\u0645\u0631\u0648\u0632 \u062e\u0644\u0627\u0642\u06cc"
                    }
                  </li>
                </Stack__>
              </div>
            </div>
            <AntdModal
              data-plasmic-name={"modal"}
              data-plasmic-override={overrides.modal}
              className={classNames("__wab_instance", sty.modal)}
              defaultStylesClassName={classNames(
                projectcss.root_reset,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens,
                plasmic_plasmic_rich_components_css.plasmic_tokens
              )}
              hideFooter={true}
              modalScopeClassName={sty["modal__modal"]}
              onOpenChange={generateStateOnChangeProp($state, [
                "modal",
                "open"
              ])}
              open={generateStateValueProp($state, ["modal", "open"])}
              title={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dy9NU
                  )}
                >
                  {"\u0628\u06cc\u0648\u0631\u06cc\u062a\u0645"}
                </div>
              }
              trigger={null}
            >
              <div className={classNames(projectcss.all, sty.freeBox__mQrqu)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yuDgb
                  )}
                >
                  {
                    " Locate Your Modal Component:\nOpen your project in Plasmic Studio.\nNavigate to the modal component that you want to edit. If your modal is part of a larger component or page, select the modal element within the structure.\n2. Edit the Modal's Height:\nDirect Height Setting:\nWith the modal selected, look at the right-hand Design panel.\nFind the Size section where you can set the height. You can input a specific value (e.g., 400px) or set it to auto, which will allow the content inside the modal to determine the height.\nDynamic Height (Responsive):\nIf you want the modal height to adjust based on screen size or content, use percentage values (e.g., 50%) or set min-height and max-height to control how it scales.\nYou can also use flexbox or grid layouts for more advanced sizing.\n3. Use CSS Flexbox/Grid for Content Adjustment:\nIf the modal's content should affect its height dynamically:\nSet the modal\u2019s container to display: flex or display: grid.\nAdjust the child elements inside the modal to grow or shrink as needed using properties like flex-grow, flex-shrink, or grid-template-rows.\n4. Adjust Padding and Margins:\nIf your modal looks too tall or short, check the padding and margins of both the modal and its internal elements. Reducing or increasing padding/margins can give you the desired visual height without changing the modal\u2019s actual height property.\n5. Responsive Height Adjustments:\nTo make your modal height responsive:\nUse different height settings for various breakpoints (e.g., mobile, tablet, desktop). In Plasmic, you can create responsive styles by clicking on the device icons in the top-right corner and adjusting the height accordingly for each device size.\n6. Custom Code Adjustments (Optional):\nIf Plasmic\u2019s visual editor doesn\u2019t give you the precision you need, you can add custom CSS in the Code > Global Styles section or inline within your modal\u2019s component.\nExample: Setting a Responsive Height\nLet\u2019s say you want your modal to have a fixed height on desktop but adjust based on content on mobile:\n\nDesktop:\nSet the height to 500px.\nMobile:\nSwitch to the mobile view in Plasmic.\nSet the height to auto and add a max-height of 80vh (viewport height).\n7. Test Your Modal:\nOnce you've adjusted the height, preview your modal across different screen sizes to ensure it behaves as expected.\nFinal Note:\nIf you're using custom code to render the modal (e.g., via React), you can control the height directly in your CSS or styled components. In Plasmic, the inline styles or custom CSS can be added directly to the elements, ensuring the design matches your needs."
                  }
                </div>
              </div>
            </AntdModal>
            <AntdModal
              data-plasmic-name={"modal2"}
              data-plasmic-override={overrides.modal2}
              className={classNames("__wab_instance", sty.modal2)}
              defaultStylesClassName={classNames(
                projectcss.root_reset,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens,
                plasmic_plasmic_rich_components_css.plasmic_tokens
              )}
              hideFooter={true}
              modalScopeClassName={sty["modal2__modal"]}
              onOpenChange={generateStateOnChangeProp($state, [
                "modal2",
                "open"
              ])}
              open={generateStateValueProp($state, ["modal2", "open"])}
              title={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fdfw1
                  )}
                >
                  {
                    "\u0627\u0646\u062a\u062e\u0627\u0628 \u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f"
                  }
                </div>
              }
              trigger={null}
            >
              <div className={classNames(projectcss.all, sty.freeBox__tG5NS)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__b6E7T)}
                >
                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    color={generateStateValueProp($state, ["button", "color"])}
                    onColorChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["button", "color"])(
                        eventArgs[0]
                      );
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kOzv
                      )}
                    >
                      {"\u0627\u0646\u062a\u062e\u0627\u0628"}
                    </div>
                  </Button>
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__ynTz)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hnZ3K
                      )}
                    >
                      {"\u0628\u0627\u0632\u06af\u0634\u062a"}
                    </div>
                  </AntdButton>
                </Stack__>
              </div>
            </AntdModal>
            <Embed
              data-plasmic-name={"embedHtml"}
              data-plasmic-override={overrides.embedHtml}
              className={classNames("__wab_instance", sty.embedHtml)}
              code={
                "    <script>\r\n        // \u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u0627\u0628\u0639 \u0628\u0647 String.prototype\r\n        String.prototype.EntoFa = function() {\r\n            return this.replace(/\\d/g, d => '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'[d]);\r\n        }\r\n        // \u062a\u0627\u0628\u0639 \u0628\u0631\u0627\u06cc \u062a\u0628\u062f\u06cc\u0644 \u0627\u0639\u062f\u0627\u062f \u062f\u0631 \u062a\u0645\u0627\u0645\u06cc \u0645\u062a\u0646\u200c\u0647\u0627\u06cc \u0635\u0641\u062d\u0647\r\n        function convertNumbersInPage() {\r\n                        console.log(\"hiiii\");\r\n\r\n            const elements = document.querySelectorAll('body *:not(script):not(style)');\r\n            elements.forEach(element => {\r\n                element.childNodes.forEach(node => {\r\n                    if (node.nodeType === Node.TEXT_NODE) {\r\n                        node.nodeValue = node.nodeValue.EntoFa();\r\n                    }\r\n                });\r\n            });\r\n        }\r\n\r\n      convertNumbersInPage();\r\n    </script>"
              }
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "button2",
    "button3",
    "h2",
    "ul",
    "modal",
    "modal2",
    "button",
    "embedHtml"
  ],
  button2: ["button2"],
  button3: ["button3"],
  h2: ["h2"],
  ul: ["ul"],
  modal: ["modal"],
  modal2: ["modal2", "button"],
  button: ["button"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  button2: typeof Button;
  button3: typeof Button;
  h2: "h2";
  ul: "ul";
  modal: typeof AntdModal;
  modal2: typeof AntdModal;
  button: typeof Button;
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBioritm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBioritm__VariantsArgs;
    args?: PlasmicBioritm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBioritm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBioritm__ArgsType,
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
          internalArgPropNames: PlasmicBioritm__ArgProps,
          internalVariantPropNames: PlasmicBioritm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBioritm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBioritm";
  } else {
    func.displayName = `PlasmicBioritm.${nodeName}`;
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

export const PlasmicBioritm = Object.assign(
  // Top-level PlasmicBioritm renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    button2: makeNodeComponent("button2"),
    button3: makeNodeComponent("button3"),
    h2: makeNodeComponent("h2"),
    ul: makeNodeComponent("ul"),
    modal: makeNodeComponent("modal"),
    modal2: makeNodeComponent("modal2"),
    button: makeNodeComponent("button"),
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicBioritm
    internalVariantProps: PlasmicBioritm__VariantProps,
    internalArgProps: PlasmicBioritm__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBioritm;
/* prettier-ignore-end */