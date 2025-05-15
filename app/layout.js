import "./globals.css";

import HtmlContainer from "@/components/HtmlContainer";

export const metadata = {
  title: "Shelley Chen",
  description: "Personal website",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant-TW">
      <HtmlContainer>{children}</HtmlContainer>
    </html>
  );
}
