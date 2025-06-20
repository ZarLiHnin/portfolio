// app/works/page.tsx
import WorksList from "@/components/WorksList";
import { getAllWorks } from "@/lib/works";

export default async function WorksPage() {
  const works = await getAllWorks();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">制作実績一覧</h1>
      <WorksList works={works} />
    </main>
  );
}
