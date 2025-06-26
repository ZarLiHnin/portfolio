// app/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import WorksList from "@/components/WorksList";
import { getAllWorks } from "@/lib/works";

export const metadata: Metadata = {
  title: "Zar Li Portfolio | ホーム",
  description:
    "Zar Liのポートフォリオサイト。開発実績やスキル情報を紹介しています。",
};

export default async function HomePage() {
  const works = await getAllWorks();
  const latestWorks = works.slice(0, 3); // 最新3件だけ表示

  return (
    <main className="p-8 space-y-16">
      <HeroSection />

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
          制作実績（一部抜粋）
        </h2>
        <WorksList works={latestWorks} />

        <div className="mt-6 text-center">
          <Link
            href="/works"
            className="text-yellow-800 underline text-lg font-medium hover:text-yellow-600 transition"
          >
            全ての制作実績を見る →
          </Link>
        </div>
      </section>
    </main>
  );
}
