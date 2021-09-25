import React from "react";
import Head from "next/head";

export default function Meta({
  title,
  description,
  canonical,
  verificationCode,
}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />

      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={title} />
      {verificationCode && (
        <meta name="google-site-verification" content={verificationCode} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
