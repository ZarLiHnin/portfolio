"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Skill = {
  id: string;
  name: string;
};

type Work = {
  title: string;
  descriptionHtml: string; // すでにhtml変換済みの説明
  thumbnailUrl: string;
  url: string;
  skills: Skill[];
};

export default function WorkDetailContent({ work }: { work: Work }) {
  return (
    <motion.main
      className="max-w-4xl mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ヒーローセクション */}
      <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={work.thumbnailUrl}
          alt={work.title}
          width={800}
          height={450}
          className="object-cover w-full h-auto rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        <h1 className="absolute bottom-4 left-4 text-white text-4xl font-bold drop-shadow-lg">
          {work.title}
        </h1>
      </div>

      {/* 説明文 */}
      <div
        className="prose prose-blue text-gray-800 max-w-none"
        dangerouslySetInnerHTML={{ __html: work.descriptionHtml }}
      />

      {/* スキルチップ */}
      <section>
        <h2 className="text-xl font-semibold text-blue-700 mb-4">使用スキル</h2>
        <div className="flex flex-wrap gap-3">
          {work.skills.map((skill) => (
            <span
              key={skill.id}
              className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* アクションボタン */}
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition"
      >
        サイトを見る →
      </a>
    </motion.main>
  );
}
