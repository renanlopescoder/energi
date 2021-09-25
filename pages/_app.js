import React from "react";
import { MoralisProvider } from "react-moralis";

import { MORALIS_CONFIG } from "../src/constants";

import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={MORALIS_CONFIG.appId}
      serverUrl={MORALIS_CONFIG.serverUrl}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default App;
