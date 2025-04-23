import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@/config/analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
});

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
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
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <div
            className={`${pretendard.variable} ${notoSerifKR.variable} w-full px-4 mx-auto font-sans`}
          >
            <main className="py-16 max-w-(--width-main) mx-auto min-h-[calc(100vh-var(--height-footer))]">
              <Header />
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
