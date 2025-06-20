// lib/works.ts
import { client } from "./cms-client";

export type Work = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  url: string;
  skills: {
    id: string;
    name: string;
  }[];
};

// 一覧取得
export async function getAllWorks() {
  const data = await client.getList<Work>({
    endpoint: "works",
  });
  return data.contents;
}

// 詳細取得
export async function getWorkById(id: string) {
  const data = await client.getListDetail<Work>({
    endpoint: "works",
    contentId: id,
  });
  return data;
}
