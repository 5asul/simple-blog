

import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import AuthGuard from "./components/AuthGuard";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Blog Posts Page",
  description:
    "Download Tailwind Blog Post Page, a free webpage template developed by Creative Tim. Based on Tailwind CSS and Material Tailwind, see the live demo on our site and elevate your blogging experience!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <link
          rel="stylesheet"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <AuthProvider>
          <AuthGuard>{children}</AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
