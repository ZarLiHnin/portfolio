// app/works/[id]/page.tsx
export const revalidate = 60;
import { getAllWorks, getWorkById } from "@/lib/works";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { markdownToHtml } from "@/lib/markdownToHtml";
import WorkDetailContent from "@/components/WorkDetailContent";

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

  // work.description を HTML に変換
  const htmlDescription = await markdownToHtml(work.description);

  return (
    <WorkDetailContent
      work={{
        title: work.title,
        descriptionHtml: htmlDescription,
        thumbnailUrl: work.thumbnail.url,
        url: work.url,
        skills: work.skills,
      }}
    />
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
