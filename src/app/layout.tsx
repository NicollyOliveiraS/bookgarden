import type { Metadata } from "next";
import { Barlow, Geist, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const barlow = Barlow({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
});
export const metadata: Metadata = {
  title: "Book Garden — Sua Livraria Online",
  description: "Explore o universo da leitura na Book Garden. Encontre os melhores livros de ficção científica, fantasia, romance, suspense e muito mais.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("h-full", "antialiased", barlow.variable, "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col bg-amber-50 font-(family-name:--font-barlow)">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
