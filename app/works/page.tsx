// app/works/page.tsx
import type { Metadata } from "next";
export const revalidate = 60;
import WorksList from "@/components/WorksList";
import { getAllWorks } from "@/lib/works";

export const metadata: Metadata = {
  title: "Zar Li Portfolio | 制作実績一覧",
  description:
    "Zar Liのポートフォリオサイト。開発実績やスキル情報を紹介しています。",
};

export default async function WorksPage() {
  const works = await getAllWorks();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">制作実績一覧</h1>
      <WorksList works={works} />
    </main>
  );
}
