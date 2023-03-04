import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { themeColors as colors } from "../constants/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={colors}>
      <React.StrictMode>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </React.StrictMode>
    </ChakraProvider>
  );
}
