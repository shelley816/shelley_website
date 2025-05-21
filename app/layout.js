import { ThemeProvider } from "@/components/store/ThemeContext";
import HtmlContainer from "@/components/HtmlContainer";

import "./globals.css";

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
      <ThemeProvider>
        <HtmlContainer>{children}</HtmlContainer>
      </ThemeProvider>
    </html>
  );
}
