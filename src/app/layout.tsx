import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "クリーンライフキュレーション",
  description: "清潔さや軽やかさを「価値観としての美意識」として再定義するライフスタイルブランド",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen">
        <Navigation />
        <main className="flex min-h-screen flex-col pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
