import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import { Global } from "@emotion/react";
import { globalStyles } from "@/theme/global-styles";
import Head from "next/head";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pepetoshi Nakamoto</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </ThemeProvider>
    </>
  );
}
