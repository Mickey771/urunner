import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import StoreProvider from "@/components/StoreProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URunner",
  description: "Kickstarting healthy lifestyle by tokenizing global fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>URunner</title>
        <meta
          name="description"
          content="Kickstarting healthy lifestyle by tokenizing global fitness"
        />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content="URunner" />
        <meta
          property="og:description"
          content="Kickstarting healthy lifestyle by tokenizing global fitness"
        />
        <meta
          property="og:image"
          content="https://www.urunner.io/preview.jpeg"
        />
        <meta property="og:url" content="https://www.urunner.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Urunner" />

        {/* Optional: Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={urbanist.className}>
        <StoreProvider>
          {children}
          <Analytics />
        </StoreProvider>
      </body>
    </html>
  );
}
