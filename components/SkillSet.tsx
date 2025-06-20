"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Skill = {
  id: string;
  name: string;
  icon?: {
    url: string;
  };
};

type Props = {
  groupedSkills: Record<string, Skill[]>;
};

export default function SkillSet({ groupedSkills }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        スキルセット
      </h2>

      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-yellow-600 mb-6">
            {category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                className="relative flex flex-col items-center w-28 h-28 sm:w-32 sm:h-32"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                {/* 花びら型 SVG 背景 */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full z-0 drop-shadow-md"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id="flowerGradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop offset="0%" stopColor="#fffbea" />
                      <stop offset="50%" stopColor="#fff3b0" />
                      <stop offset="100%" stopColor="#ffe066" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M50,10 
    C65,0 85,15 90,30 
    C95,50 80,80 50,90 
    C20,80 5,50 10,30 
    C15,15 35,0 50,10Z"
                    fill="url(#flowerGradient)"
                    stroke="#facc15"
                    strokeWidth="2.5"
                  />
                </svg>

                {/* アイコン */}
                {skill.icon?.url && (
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 z-10">
                    <Image
                      src={skill.icon.url}
                      alt={skill.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}

                {/* スキル名 */}
                <span className="mt-2 text-sm font-medium text-gray-800 z-10 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
