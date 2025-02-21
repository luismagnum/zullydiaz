import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Scroll from "../components/Scroll";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Psico.Clinico Zully Diaz",
  description: "Psicologo Clinico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
        <Scroll />
      </body>
    </html>
  );
}
