import { client } from "./cms-client";

export type SkillCategory = {
  id: string;
  name: string;
};

export type Skill = {
  id: string;
  name: string;
  icon?: {
    url: string;
  };
  category: SkillCategory;
};

// 全カテゴリとそれに属するスキルを取得
export async function getGroupedSkills() {
  const skillsData = await client.getList<Skill>({
    endpoint: "skills",
    queries: { limit: 100 },
  });

  // カテゴリ別にグループ化
  const grouped = skillsData.contents.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      const category = skill.category.name;
      if (!acc[category]) acc[category] = [];
      acc[category].push(skill);
      return acc;
    },
    {}
  );

  return grouped;
}
