import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const univers = localFont({ src: '../assets/fonts/univers-55-roman.woff2' })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={univers.className}>{children}</body>
    </html>
  );
}
