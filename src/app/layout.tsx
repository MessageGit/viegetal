import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viegetal - Atelier de printemps",
  description: "Hygiène de vie - Mouvement - Cuisine végétale | Approche globale du bien-être",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const fontCss = `
    @font-face {
      font-family: 'Checkpoint-Bold';
      src: url('${basePath}/fonts/checkpoint/Checkpoint-Bold.ttf') format('opentype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Checkpoint-Regular';
      src: url('${basePath}/fonts/checkpoint/Checkpoint-Regular.ttf') format('opentype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
  `;

  return (
    <html lang="fr">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontCss }} />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
