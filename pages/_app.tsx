import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import { Global } from "@emotion/react";
import { globalStyles } from "@/theme/global-styles";
import Head from "next/head";
import { WagmiConfig, createClient } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import blockchainConfig from "@/lib/blockchain/blockchain-config";

const { provider } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: blockchainConfig.alchemyApiKey })]
);

export const client = createClient({
  autoConnect: true,
  provider,
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
