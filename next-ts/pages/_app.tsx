import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
    {/* nav bar goes here */}
    <Component {...pageProps} />
  </>
  );
}
