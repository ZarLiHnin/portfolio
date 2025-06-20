"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-center gap-12 py-20 md:py-32 px-6 bg-gradient-to-br from-blue-600 via-blue-400 to-yellow-300 text-white w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* プロフィール画像 */}
      <motion.div
        className="w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-yellow-400 flex-shrink-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img
          src="/images/zarli.jpg"
          alt="Zar Li"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* テキスト */}
      <motion.div
        className="flex flex-col items-center md:items-start text-left md:text-left"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          こんにちは、Zar Liです！
        </h1>
        <p className="text-base md:text-2xl leading-relaxed drop-shadow-md mb-6 max-w-xl">
          フロントもバックもできる、魅力あるUIと技術を持つエンジニアです。
        </p>
        <Link
          href="/profile"
          className="inline-block px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          プロフィールを見る
        </Link>
      </motion.div>
    </motion.section>
  );
}
