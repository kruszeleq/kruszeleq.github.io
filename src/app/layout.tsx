import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/HomePage/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/HomePage/Footer";
import Background from "@/components/HomePage/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "itzkrofi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pl">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
