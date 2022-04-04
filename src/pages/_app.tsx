import "../styles/globals.css";
import type { AppProps } from "next/app";
import TagsProvider from "../contexts/tagsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TagsProvider>
      <Component {...pageProps} />
    </TagsProvider>
  );
}

export default MyApp;
