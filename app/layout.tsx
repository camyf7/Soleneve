import React from "react"
import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const _playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sol & Neve Caraguatatuba - Sorvetes Artesanais",
  description:
    "A melhor sorveteria de Caraguatatuba! Sorvetes artesanais, acai, paletas, sobremesas e muito mais. Sol & Neve - Todo dia, sabor e alegria.",
  keywords:
    "sorvete, caraguatatuba, sol e neve, acai, paleta, picole, sobremesa, sorveteria",
};

export const viewport: Viewport = {
  themeColor: "#d41d51",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
