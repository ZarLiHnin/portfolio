import React from "react";

const colors = [
  { name: "blue-700", value: "#1e40af" },
  { name: "blue-600", value: "#2563eb" },
  { name: "yellow-500", value: "#eab308" },
];

export default {
  title: "Tokens/Colors",
};

export const Colors = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    {colors.map(({ name, value }) => (
      <div key={name} style={{ textAlign: "center" }}>
        <div
          style={{
            backgroundColor: value,
            width: 80,
            height: 80,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
        <p style={{ marginTop: 8, fontFamily: "monospace" }}>{name}</p>
        <p style={{ fontFamily: "monospace" }}>{value}</p>
      </div>
    ))}
  </div>
);
