import { HostQueryProvider } from "../lib/providers/query-provider";
import "../styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import HostLayout from "../components/layouts/host-layout";

// Define types for pages with custom layouts
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, or fall back to default layout
  const getLayout = Component.getLayout ?? ((page) => <HostLayout>{page}</HostLayout>);

  return <HostQueryProvider>{getLayout(<Component {...pageProps} />)}</HostQueryProvider>;
}
