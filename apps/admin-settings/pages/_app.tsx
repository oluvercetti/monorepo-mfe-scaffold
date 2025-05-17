import { inter } from "@repo/ui/src/styles/font";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AdminSettingsQueryProvider } from "../lib/providers/query-provider";
import "@repo/ui/src/styles/globals.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Admin Settings - Microfrontend Demo</title>
        <meta
          name="description"
          content="Admin settings management - Next.js Microfrontend Demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminSettingsQueryProvider>
        <main className={`antialiased ${inter.className} p-6`}>
          <Component {...pageProps} />
        </main>
      </AdminSettingsQueryProvider>
    </>
  );
}
