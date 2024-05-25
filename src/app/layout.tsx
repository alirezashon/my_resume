import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "علیرضا اکبری",
  description: "توسعه دهنده وب - برنامه نویس - فرانت اند - بک اند - وب اپلیکیشن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
