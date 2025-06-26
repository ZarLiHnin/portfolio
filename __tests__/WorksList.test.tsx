// __tests__/WorksList.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import WorksList from "@/components/WorksList";
import "@testing-library/jest-dom";

const mockWorks = [
  {
    id: "work-1",
    title: "ポートフォリオサイト",
    description: "Next.js と Tailwind で作った",
    shortDescription: "Next.js と Tailwind ",
  },
  {
    id: "work-2",
    title: "ブログアプリ",
    description: "Markdown + App Router",
    shortDescription: "Markdown と App Router ",
  },
];

describe("WorksList", () => {
  it("renders a list of work items", () => {
    render(<WorksList works={mockWorks} />);
    expect(screen.getByText("ポートフォリオサイト")).toBeInTheDocument();
    expect(screen.getByText("ブログアプリ")).toBeInTheDocument();
  });

  it("renders link to detail page", () => {
    render(<WorksList works={mockWorks} />);
    const link1 = screen.getByTestId("detail-link-work-1");
    const link2 = screen.getByTestId("detail-link-work-2");

    expect(link1).toHaveAttribute("href", "/works/work-1");
    expect(link2).toHaveAttribute("href", "/works/work-2");
  });
});
