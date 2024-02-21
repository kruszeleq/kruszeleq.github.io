import { Inter } from "next/font/google";

import Navbar from "@/components/HomePage/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/HomePage/Footer";
import Background from "@/components/HomePage/Background";
import { Toaster } from "@/components/ui/sonner";

import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: RootLayoutProps) {
  return (
    <html
      suppressHydrationWarning
      lang={params.locale}
      dir={dir(params.locale)}
    >
      <head>
        <title>itzkrofi</title>
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Navbar locale={params.locale} />
          {children}

          <Footer locale={params.locale} />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
