import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolsa de trabajo UAQ",
  description: "Plataforma para buscar empleo, empleadores, colaboradores. Principalmente dirigido a comunidad UAQ",
  keywords: ["Empleo", "Colaboradores", "Empresas", "Trabajo", "UAQ", "Carreras UAQ", "Querétaro"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
