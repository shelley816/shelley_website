import { ContextProvider } from "@/components/store/Context";
import HtmlContainer from "@/components/ui/HtmlContainer";

import "./globals.css";

export const metadata = {
  title: "Shelley Chen｜Front-End Engineer",
  description: "嗨～我是 Shelley，這是我的個人網站，目前為轉職成為前端工程師努力。",
  keywords: ["Shelley", "Front-End", "Next.js", "作品集", "React", "Web Developer"],
  authors: [{ name: "Shelley Chen", url: "https://shelley-website.vercel.app" }],
  creator: "Shelley Chen",
  metadataBase: new URL("https://shelley-website.vercel.app"),

  openGraph: {
    title: "Shelley Chen｜Front-End Engineer",
    description: "嗨～我是 Shelley，這是我的個人網站，目前為轉職成為前端工程師努力。",
    url: "https://shelley-website.vercel.app",
    siteName: "Shelley Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelley 的個人網站封面",
      },
    ],
    locale: "zh-TW",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant-TW">
      <ContextProvider>
        <HtmlContainer>{children}</HtmlContainer>
      </ContextProvider>
    </html>
  );
}
