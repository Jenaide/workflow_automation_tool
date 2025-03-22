import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsentProvider } from "@/components/context/cookie-concent";
import CookieConsentBanner from "@/components/cookie/cookie-concent-banner";
import CookiePreferencesModal from "@/components/cookie/cookie-preference-modal";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowPilot",
  description: "Automate your workflow with FlowPilot that navigates and automizes your workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CookieConsentProvider>
            {children}
            <CookieConsentBanner />
            <CookiePreferencesModal />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
