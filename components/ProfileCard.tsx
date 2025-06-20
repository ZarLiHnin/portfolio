import Image from "next/image";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  QrCodeIcon,
  GlobeAltIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function ProfileCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md mx-auto shadow-md text-center">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600">
        <Image
          src="/images/zarli.jpg"
          alt="Zar Li Hnin"
          width={128}
          height={128}
          className="object-cover"
          priority
        />
      </div>
      <h2 className="text-3xl font-extrabold text-blue-700 mb-6">
        Zar Li Hnin
      </h2>
      <div className="space-y-5 text-gray-700 text-left">
        <ProfileItem
          icon={<UserIcon className="w-5 h-5 text-blue-600" />}
          label="職種"
          value="Software Engineer"
        />
        <ProfileItem
          icon={<AcademicCapIcon className="w-5 h-5 text-blue-600" />}
          label="学歴"
          value="UIT（2014〜2019）"
        />
        <ProfileItem
          icon={<BriefcaseIcon className="w-5 h-5 text-blue-600" />}
          label="職務経歴"
          value="ソフトウェア開発（Java, PHP）5年以上"
        />
        <ProfileItem
          icon={<QrCodeIcon className="w-5 h-5 text-blue-600" />}
          label="スキル"
          value="React, Next.js, Tailwind CSS, TypeScript, Java, PHP, AWS など"
        />
        <ProfileItem
          icon={<HeartIcon className="w-5 h-5 text-blue-600" />}
          label="趣味"
          value="読書、旅行、プログラミング"
        />
        <ProfileItem
          icon={<GlobeAltIcon className="w-5 h-5 text-blue-600" />}
          label="言語"
          value="日本語（N1）、英語"
        />
        <ProfileItem
          icon={<GlobeAltIcon className="w-5 h-5 text-blue-600" />}
          label="国籍"
          value="ミャンマー"
        />
        <ProfileItem
          icon={<AcademicCapIcon className="w-5 h-5 text-blue-600" />}
          label="資格"
          value="日本語能力試験N1、ITパスポートその他"
        />
      </div>
    </div>
  );
}

function ProfileItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <p className="flex items-center space-x-2">
      {icon}
      <span className="font-semibold text-blue-600 w-24">{label}:</span>
      <span>{value}</span>
    </p>
  );
}
