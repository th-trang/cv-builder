import type { Metadata } from "next";
import { getFontVariablesClass } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Profile",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getFontVariablesClass()} antialiased`}>
        {children}
      </body>
    </html>
  );
}
