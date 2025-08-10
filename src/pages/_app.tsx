import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
      </Head>
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </>
  );
}
