import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./../components/main/navbar";
import Config from "./app.config";

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
				<div className="fixed inset-0 -z-20 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#121212_40%,#242424_100%)]" />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
