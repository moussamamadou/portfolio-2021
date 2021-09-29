import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/index.css";
import "../styles/locomotive-scroll.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
