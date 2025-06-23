// app/works/[id]/page.tsx
export const revalidate = 60;
import { getAllWorks, getWorkById } from "@/lib/works";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const works = await getAllWorks();
  return works.map((work) => ({ id: work.id }));
}

export default async function WorkDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const work = await getWorkById(resolvedParams.id);

  if (!work) {
    notFound(); // 4
    // 04ページへ
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">{work.title}</h1>
      <p className="text-gray-700">{work.description}</p>

      <div className="relative w-full h-64">
        <Image
          src={work.thumbnail.url}
          alt={work.title}
          fill
          className="object-cover rounded-lg"
          unoptimized
        />
      </div>

      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-yellow-500 underline font-medium"
      >
        サイトを見る →
      </a>

      <section>
        <h2 className="text-lg font-semibold mt-8 text-blue-600">
          使用スキル:
        </h2>
        <ul className="list-disc list-inside text-gray-800">
          {work.skills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const work = await getWorkById(resolvedParams.id);

  if (!work) {
    return {
      title: "Not Found",
      description: "ページが見つかりませんでした。",
    };
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [
        {
          url: work.thumbnail?.url || "/images/default-ogp.png", // fallbackもOK
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.description,
      images: [work.thumbnail?.url || "/default-ogp.png"],
    },
  };
}
