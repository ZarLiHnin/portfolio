"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // メニューを閉じる関数
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative bg-white border-b border-gray-200 px-4 py-3 md:hidden">
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="focus:outline-none"
      >
        <div
          className="w-6 h-0.5 bg-gray-800 mb-1 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}
        />
        <div
          className="w-6 h-0.5 bg-gray-800 mb-1 transition-opacity duration-300"
          style={{ opacity: isOpen ? 0 : 1 }}
        />
        <div
          className="w-6 h-0.5 bg-gray-800 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        />
      </button>

      {/* メニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white mt-2 shadow-lg rounded-md"
          >
            {[
              { label: "ホーム", href: "/" },
              { label: "プロフィール", href: "/profile" },
              { label: "制作実績", href: "/works" },
              { label: "お問い合わせ", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={href} className="border-b border-gray-200">
                <a
                  href={href}
                  className="block px-4 py-3 hover:bg-gray-100"
                  onClick={closeMenu} // ここでメニュー閉じる
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
