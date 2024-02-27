import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kikirikat",
  description: "Web Application for Google Solution Challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen min-w-screen"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
