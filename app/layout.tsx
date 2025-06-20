import WaveGradientBackground from "@/components/WaveGradientBackground";
import MobileNav from "@/components/MobileNav"; // 追加
import "./globals.css";

// app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative min-h-screen">
        <WaveGradientBackground />

        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
          <MobileNav />
        </header>

        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
