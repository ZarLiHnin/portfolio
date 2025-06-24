// components/WorksList.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Work = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
};

export default function WorksList({ works }: { works: Work[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <motion.li
          key={work.id}
          className="
    bg-white rounded-xl shadow transition p-4 border border-blue-100
    hover:bg-blue-50 hover:border-blue-300
    dark:hover:bg-yellow-100
  "
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            {work.title}
          </h2>
          <p className="text-gray-700 mb-4 text-sm">{work.shortDescription}</p>
          <Link
            href={`/works/${work.id}`}
            className="text-yellow-500 hover:underline"
          >
            詳細 →
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
