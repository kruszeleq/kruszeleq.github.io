import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/main/navbar";
import { cn } from "@/lib/utils";
import Config from "./app.config";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: Config.title,
  description: "Strona o mnie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className)}>
        <Navbar />
        <Toaster
          toastOptions={{
            style: {
              border: "1px solid #383838",
              background: "#1e1e1f",
              borderRadius: "1.5rem",
              color: "white",
            },
            success: {
              icon: "🕒",
            },
          }}
          position="bottom-center"
        />
        {children}
      </body>
    </html>
  );
}
