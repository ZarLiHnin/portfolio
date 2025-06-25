// app/page.tsx
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import WorksList from "@/components/WorksList";
import { getAllWorks } from "@/lib/works";
import { Mail, Phone, Facebook } from "lucide-react";

export default async function HomePage() {
  const works = await getAllWorks();
  const latestWorks = works.slice(0, 3); // 最新3件だけ表示

  return (
    <main className="p-8 space-y-16">
      <HeroSection />

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
          制作実績（一部抜粋）
        </h2>
        <WorksList works={latestWorks} />

        <div className="mt-6 text-center">
          <Link
            href="/works"
            className="text-yellow-800 underline text-lg font-medium hover:text-yellow-600 transition"
          >
            全ての制作実績を見る →
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center border-t border-blue-100 pt-16 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">
          ご連絡・お問い合わせ
        </h2>
        <p className="text-gray-700">
          お仕事のご依頼やご相談など、お気軽にご連絡ください。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zarlehninn@gmail.com"
            className="flex items-center gap-2 text-yellow-800 hover:underline hover:text-yellow-600"
          >
            <Mail className="w-5 h-5" />
            zarlehninn@gmail.com
          </a>

          <a
            href="tel:+819012345678"
            className="flex items-center gap-2 text-yellow-800 hover:underline hover:text-yellow-600"
          >
            <Phone className="w-5 h-5" />
            090-1234-5678
          </a>

          <a
            href="https://www.facebook.com/zarle.hninn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-yellow-800 hover:underline hover:text-yellow-600"
          >
            <Facebook className="w-5 h-5" />
            Facebookで連絡
          </a>
        </div>
      </section>
    </main>
  );
}
