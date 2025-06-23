import React from "react";

export default {
  title: "Tokens/DesignTokens",
};

export const DesignTokens = () => (
  <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
    <h1>デザイントークン</h1>
    <section>
      <h2>色</h2>
      <ul>
        <li>
          <strong>blue-700:</strong> ボタンのメイン色
        </li>
        <li>
          <strong>blue-600:</strong> ボタンのホバー色
        </li>
        <li>
          <strong>yellow-500:</strong> 強調テキストの色
        </li>
      </ul>
    </section>
    <section>
      <h2>フォントサイズ</h2>
      <p>sm: 小さいテキスト, md: 標準テキスト, lg: 大きい見出し</p>
    </section>
    {/* 必要に応じてカラーサンプルなどのコンポーネントも埋め込む */}
  </div>
);
