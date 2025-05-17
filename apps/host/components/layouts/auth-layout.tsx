import Head from "next/head";
import React from "react";
import { inter } from "@repo/ui/src/styles/font";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>repo Service Management</title>
        <meta name="description" content="repo Service Management Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`antialiased ${inter.className}`}>{children}</main>
    </>
  );
};

export default AuthLayout;
