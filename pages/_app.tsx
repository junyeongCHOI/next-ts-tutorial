import { AppProps } from "next/app";
import "../styles/reset_normalize.scss";

const _app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default _app;
