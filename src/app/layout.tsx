import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uRunner",
  description: "Kickstarting healthy lifestyle by tokenizing global fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
