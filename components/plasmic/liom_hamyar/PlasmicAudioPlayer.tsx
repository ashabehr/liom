/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC
// Component: 8TLNkR4k2mrN

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

import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../todo_mvc_app/plasmic.module.css"; // plasmic-import: suVPi77vb6vv9K5rYJwyxC/projectcss
import sty from "./PlasmicAudioPlayer.module.css"; // plasmic-import: 8TLNkR4k2mrN/css

createPlasmicElementProxy;

export type PlasmicAudioPlayer__VariantMembers = {
  postType: "video" | "image" | "voise";
};
export type PlasmicAudioPlayer__VariantsArgs = {
  postType?: SingleChoiceArg<"video" | "image" | "voise">;
};
type VariantPropType = keyof PlasmicAudioPlayer__VariantsArgs;
export const PlasmicAudioPlayer__VariantProps = new Array<VariantPropType>(
  "postType"
);

export type PlasmicAudioPlayer__ArgsType = { audioLink?: string };
type ArgPropType = keyof PlasmicAudioPlayer__ArgsType;
export const PlasmicAudioPlayer__ArgProps = new Array<ArgPropType>("audioLink");

export type PlasmicAudioPlayer__OverridesType = {
  root?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultAudioPlayerProps {
  audioLink?: string;
  postType?: SingleChoiceArg<"video" | "image" | "voise">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAudioPlayer__RenderFunc(props: {
  variants: PlasmicAudioPlayer__VariantsArgs;
  args: PlasmicAudioPlayer__ArgsType;
  overrides: PlasmicAudioPlayer__OverridesType;
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
        path: "postType",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.postType
      },
      {
        path: "audioLink2",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.audioLink;
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
          [sty.rootpostType_image]: hasVariant($state, "postType", "image"),
          [sty.rootpostType_voise]: hasVariant($state, "postType", "voise")
        }
      )}
    >
      <Embed
        data-plasmic-name={"embedHtml"}
        data-plasmic-override={overrides.embedHtml}
        className={classNames("__wab_instance", sty.embedHtml)}
        code={
          '  <div class="audio-player">\r\n        <div class="player-controls">\r\n          <button class="play-btn" onclick="playBtnclick()">\r\n            <svg class="playicon" fill="#ffffff" width="24px" height="24px" viewBox="-1 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path> </g></svg>\r\n            <svg class="pauseicon" fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pause</title> <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path> </g></svg>\r\n          </button>\r\n          <div class="progress-container">\r\n            <div class="progress-bar">\r\n              <div class="progress-handle"></div>\r\n            </div>\r\n            <div class="remaining-time">00:00</div> <!-- \u0632\u0645\u0627\u0646 \u0628\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0645\u0646\u062a\u0642\u0644 \u0634\u062f -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    <script>\r\n            const audioPlayer = new Audio();\r\n            const playBtn = document.querySelector(\'.play-btn\');\r\n            const progressContainer = document.querySelector(\'.progress-container\');\r\n            const progressBar = document.querySelector(\'.progress-bar\');\r\n            const remainingTimeEl = document.querySelector(\'.remaining-time\');\r\n\r\n            function playBtnclick(){ \r\n              audioPlayer.src = window.audioLink;\r\n                audioPlayer.load();\r\n                remainingTimeEl.classList.add(\'show\');\r\n                if (audioPlayer.paused) {\r\n                    audioPlayer.play();\r\n                    playBtn.classList.add(\'playing\');\r\n                } else {\r\n                    audioPlayer.pause();\r\n                    playBtn.classList.remove(\'playing\');\r\n                }\r\n            };\r\n\r\n    remainingTimeEl.classList.add(\'show\');\r\n\r\n    if (audioPlayer.paused) {\r\n        audioPlayer.play();\r\n        playBtn.classList.add(\'playing\');\r\n    } else {\r\n        audioPlayer.pause();\r\n        playBtn.classList.remove(\'playing\');\r\n    }\r\n}\r\n                \r\n            };\r\n\r\n            audioPlayer.addEventListener(\'timeupdate\', function() {\r\n                const currentTime = audioPlayer.currentTime;\r\n                const duration = audioPlayer.duration;\r\n                \r\n                if (duration) {\r\n                    const progressPercent = (currentTime / duration) * 100;\r\n                    progressBar.style.width = progressPercent + \'%\';\r\n                    \r\n                    // \u0646\u0645\u0627\u06cc\u0634 \u0632\u0645\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0645\u0639\u06a9\u0648\u0633\r\n                    const remainingTime = duration - currentTime;\r\n                    remainingTimeEl.textContent = formatTime(remainingTime);\r\n                }\r\n            });\r\n\r\n            progressContainer.addEventListener(\'click\', function(e) {\r\n                const width = this.clientWidth;\r\n                const clickX = e.offsetX;\r\n                const duration = audioPlayer.duration;\r\n                if (!isNaN(duration)) {\r\n                    audioPlayer.currentTime = (clickX / width) * duration;\r\n                }\r\n            });\r\n\r\n            audioPlayer.addEventListener(\'ended\', function() {\r\n                playBtn.classList.remove(\'playing\');\r\n                progressBar.style.width = \'0%\';\r\n            });\r\n\r\n            audioPlayer.addEventListener(\'loadedmetadata\', function() {\r\n                remainingTimeEl.textContent = formatTime(audioPlayer.duration);\r\n            });\r\n\r\n            function formatTime(seconds) {\r\n                if (isNaN(seconds)) return \'0:00\';\r\n                const minutes = Math.floor(seconds / 60);\r\n                const secs = Math.floor(seconds % 60);\r\n                return `${minutes}:${secs < 10 ? \'0\' : \'\'}${secs}`;\r\n            }\r\n    </script>'
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "embedHtml"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAudioPlayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAudioPlayer__VariantsArgs;
    args?: PlasmicAudioPlayer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAudioPlayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAudioPlayer__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAudioPlayer__ArgProps,
          internalVariantPropNames: PlasmicAudioPlayer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAudioPlayer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAudioPlayer";
  } else {
    func.displayName = `PlasmicAudioPlayer.${nodeName}`;
  }
  return func;
}

export const PlasmicAudioPlayer = Object.assign(
  // Top-level PlasmicAudioPlayer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicAudioPlayer
    internalVariantProps: PlasmicAudioPlayer__VariantProps,
    internalArgProps: PlasmicAudioPlayer__ArgProps
  }
);

export default PlasmicAudioPlayer;
/* prettier-ignore-end */
