import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import { Global } from "@emotion/react";
import { globalStyles } from "@/theme/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
