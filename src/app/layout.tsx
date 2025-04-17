import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yoouyeon.dev",
  description: "Frontend developer yoouyeon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={`${notoSansKR.variable} ${notoSerifKR.variable}`}>
          <div className="container">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
