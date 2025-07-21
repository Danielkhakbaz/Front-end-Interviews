import type { Metadata } from "next";
import { LatoFont } from "@/styles/fonts";
import { ViewTransitions } from "next-view-transitions";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "",
    "twitter:description": "",
    "twitter:url": "",
    "twitter:domain": "danieloo.vercel.app",
    "twitter:image": "",
    "twitter:card": "summary_large_image",
    "og:title": "",
    "og:description": "",
    "og:url": "",
    "og:image": "",
    "og:type": "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={LatoFont.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
