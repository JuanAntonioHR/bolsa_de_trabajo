import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const font = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolsa de trabajo UAQ",
  description: "Plataforma para buscar empleo y/o colaboradores. Principalmente dirigido a comunidad UAQ",
  keywords: ["Empleo", "Colaboradores", "Empresas", "Trabajo", "UAQ", "Carreras UAQ", "Querétaro"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
