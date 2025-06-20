import ProfileCard from "@/components/ProfileCard";
import SkillSet from "@/components/SkillSet";
import AnimatedContainer from "@/components/AnimatedContainer"; // 後述のクライアントコンポーネント
import { getGroupedSkills } from "@/lib/skills";

export default async function ProfilePage() {
  const groupedSkills = await getGroupedSkills();

  return (
    <main className="p-8 space-y-16">
      <AnimatedContainer>
        <ProfileCard />
      </AnimatedContainer>

      <AnimatedContainer delay={0.3}>
        <SkillSet groupedSkills={groupedSkills} />
      </AnimatedContainer>
    </main>
  );
}
