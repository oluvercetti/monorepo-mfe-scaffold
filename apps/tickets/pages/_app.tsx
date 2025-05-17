import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { inter } from "@repo/ui/src/styles/font";
import { QueryProvider } from "@repo/shared";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tickets - Microfrontend Demo</title>
        <meta
          name="description"
          content="Ticket management system - Next.js Microfrontend Demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryProvider>
        <main className={`antialiased ${inter.className}`}>
          <Component {...pageProps} />
        </main>
      </QueryProvider>
    </>
  );
}
