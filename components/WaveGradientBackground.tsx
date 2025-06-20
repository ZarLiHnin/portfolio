"use client";
import React, { useState, useEffect } from "react";

const dotCount = 40;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function WaveGradientBackground() {
  const [dots, setDots] = useState<
    {
      size: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    // クライアントでだけ乱数を作る
    const newDots = Array.from({ length: dotCount }).map((_, i) => ({
      size: random(4, 12),
      left: random(0, 100),
      top: random(0, 100),
      duration: random(6, 15),
      delay: random(0, 10),
      color: i % 2 === 0 ? "#fbbf24" : "#3b82f6",
    }));
    setDots(newDots);
  }, []);

  if (dots.length === 0) {
    // サーバー側レンダリング時は空で返す
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -10,
        backgroundColor: "#e0f2fe",
      }}
    >
      {dots.map((dot, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: dot.color,
            width: dot.size,
            height: dot.size,
            left: `${dot.left}vw`,
            top: `${dot.top}vh`,
            animation: `floatY ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
