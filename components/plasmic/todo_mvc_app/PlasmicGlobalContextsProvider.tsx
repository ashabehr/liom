// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: suVPi77vb6vv9K5rYJwyxC

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: ndlOltyewsQb/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: EEWwb4qBFl4l/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: lER0gVvAHk4k/codeComponent
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;

  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;

  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;

  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;

  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    fragmentProps,
    growthBookProps,
    splunkProps,
    embedCssProps,
    antdConfigProviderProps,
    cmsCredentialsProviderProps
  } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : undefined
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
      primaryColor={
        fragmentProps && "primaryColor" in fragmentProps
          ? fragmentProps.primaryColor!
          : "#000000"
      }
      rtl={
        fragmentProps && "rtl" in fragmentProps ? fragmentProps.rtl! : undefined
      }
    >
      <GrowthBook
        {...growthBookProps}
        apiHost={
          growthBookProps && "apiHost" in growthBookProps
            ? growthBookProps.apiHost!
            : undefined
        }
        clientKey={
          growthBookProps && "clientKey" in growthBookProps
            ? growthBookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthBookProps && "previewAttributes" in growthBookProps
            ? growthBookProps.previewAttributes!
            : undefined
        }
      >
        <Splunk
          {...splunkProps}
          defaultApiHost={
            splunkProps && "defaultApiHost" in splunkProps
              ? splunkProps.defaultApiHost!
              : undefined
          }
          defaultApiKey={
            splunkProps && "defaultApiKey" in splunkProps
              ? splunkProps.defaultApiKey!
              : undefined
          }
        >
          <EmbedCss
            {...embedCssProps}
            css={
              embedCssProps && "css" in embedCssProps
                ? embedCssProps.css!
                : " \r\n@font-face{\r\n  font-family: 'yekan bakh';\r\n  src: url('https://site-assets.plasmic.app/2cc89407b67c2a224551a27524742893.ttf');\r\n  font-weight: normal;\r\n}\r\n@font-face{\r\n  font-family: 'yekan bakh';\r\n  src: url('https://site-assets.plasmic.app/4951d0b74643aa85723536045c0e1258.ttf');\r\n  font-weight: bold;\r\n}\r\n@font-face{\r\n  font-family: 'yekan bakh';\r\n  src: url('https://site-assets.plasmic.app/953dde47a63d8fcd8933aeaa704331ef.ttf');\r\n  font-weight: 600;\r\n}\r\n*{\r\n  direction: rtl;\r\n  font-family: 'yekan bakh';\r\n  font-feature-settings: 'lnum' 0, 'tnum' 0;\r\n}\r\n    @media (max-width: 780px) {\r\n      body::-webkit-scrollbar {\r\n        display: none; \r\n      }\r\n}\r\n\r\n.negative {\r\n    direction: ltr;\r\n}\r\n.ant-collapse-arrow{\r\n      transform: scaleX(-1);\r\n      position: relative;\r\n      top: 50%;\r\n}\r\n.bioritmbox .ant-progress-inner{\r\n  width: 90px !important;\r\n  height: 90px !important;\r\n}\r\n.bioritmbox .ant-progress-text{\r\n      position: relative 1!important;\r\n      top: 75%  !important;\r\n      opacity: 0;\r\n}\r\n"
            }
          >
            <AntdConfigProvider
              {...antdConfigProviderProps}
              borderRadius={
                antdConfigProviderProps &&
                "borderRadius" in antdConfigProviderProps
                  ? antdConfigProviderProps.borderRadius!
                  : 6
              }
              colorBgBase={
                antdConfigProviderProps &&
                "colorBgBase" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorBgBase!
                  : "#ffffff"
              }
              colorError={
                antdConfigProviderProps &&
                "colorError" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorError!
                  : "#ff4d4f"
              }
              colorInfo={
                antdConfigProviderProps &&
                "colorInfo" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorInfo!
                  : "#1677ff"
              }
              colorPrimary={
                antdConfigProviderProps &&
                "colorPrimary" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorPrimary!
                  : "#327CE4"
              }
              colorSuccess={
                antdConfigProviderProps &&
                "colorSuccess" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorSuccess!
                  : "#52c41a"
              }
              colorWarning={
                antdConfigProviderProps &&
                "colorWarning" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorWarning!
                  : "#faad14"
              }
              controlHeight={
                antdConfigProviderProps &&
                "controlHeight" in antdConfigProviderProps
                  ? antdConfigProviderProps.controlHeight!
                  : 32
              }
              defaultDark={
                antdConfigProviderProps &&
                "defaultDark" in antdConfigProviderProps
                  ? antdConfigProviderProps.defaultDark!
                  : false
              }
              lineWidth={
                antdConfigProviderProps &&
                "lineWidth" in antdConfigProviderProps
                  ? antdConfigProviderProps.lineWidth!
                  : 1
              }
              loadingText={
                antdConfigProviderProps &&
                "loadingText" in antdConfigProviderProps
                  ? antdConfigProviderProps.loadingText!
                  : undefined
              }
              removeLoading={
                antdConfigProviderProps &&
                "removeLoading" in antdConfigProviderProps
                  ? antdConfigProviderProps.removeLoading!
                  : true
              }
              sizeStep={
                antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
                  ? antdConfigProviderProps.sizeStep!
                  : 4
              }
              sizeUnit={
                antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
                  ? antdConfigProviderProps.sizeUnit!
                  : 4
              }
              themeStyles={
                antdConfigProviderProps &&
                "themeStyles" in antdConfigProviderProps
                  ? antdConfigProviderProps.themeStyles!
                  : true
                  ? {
                      fontFamily: "Roboto",
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "1.5",
                      color: "#535353",
                      letterSpacing: "normal"
                    }
                  : undefined
              }
              wireframe={
                antdConfigProviderProps &&
                "wireframe" in antdConfigProviderProps
                  ? antdConfigProviderProps.wireframe!
                  : false
              }
            >
              <CmsCredentialsProvider
                {...cmsCredentialsProviderProps}
                databaseId={
                  cmsCredentialsProviderProps &&
                  "databaseId" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.databaseId!
                    : undefined
                }
                databaseToken={
                  cmsCredentialsProviderProps &&
                  "databaseToken" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.databaseToken!
                    : undefined
                }
                host={
                  cmsCredentialsProviderProps &&
                  "host" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.host!
                    : "https://data.plasmic.app"
                }
                locale={
                  cmsCredentialsProviderProps &&
                  "locale" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.locale!
                    : undefined
                }
              >
                {children}
              </CmsCredentialsProvider>
            </AntdConfigProvider>
          </EmbedCss>
        </Splunk>
      </GrowthBook>
    </Fragment>
  );
}
