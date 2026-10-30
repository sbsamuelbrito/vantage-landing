import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import AnalyticsScripts from "./AnalyticsScripts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vantage Energia | Black Friday – 35% OFF na 1ª fatura",
  description:
    "Garanta 35% de economia na primeira fatura Vantage nesta Black Friday. Sem obras, sem investimento e 100% digital. Oferta exclusiva para novos clientes em GO.",
  openGraph: {
    title: "Vantage Energia | Black Friday – 35% OFF na 1ª fatura",
    description:
      "Economize 35% na primeira fatura sem instalar nada em casa. Processo rápido e 100% online. Aproveite a Black Friday Vantage.",
    url: "https://vantageenergia.com.br",
    siteName: "Vantage Energia",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Suspense fallback={null}>
          <AnalyticsScripts />
        </Suspense>
        {children}
      </body>
    </html>
  );
}