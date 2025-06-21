// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const secretToken = process.env.REVALIDATE_SECRET;

type RevalidateRequestBody = {
  path?: string;
  token?: string;
};

export async function POST(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const tokenFromQuery = query.get("token");
  const pathFromQuery = query.get("path");

  let body: RevalidateRequestBody = {};

  try {
    // JSONパースして型付け
    body = (await req.json()) as RevalidateRequestBody;
  } catch {
    // 失敗した場合でも undefined で進める
  }

  const token = body.token || tokenFromQuery;
  const path = body.path || pathFromQuery;

  if (!token || token !== secretToken) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: "Missing path" }, { status: 400 });
  }

  try {
    // 必要に応じて複数ページを再生成
    const pathsToRevalidate = new Set<string>([path]);

    if (path === "/works") {
      pathsToRevalidate.add("/");
    }

    for (const p of pathsToRevalidate) {
      revalidatePath(p);
    }

    return NextResponse.json({
      revalidated: true,
      paths: Array.from(pathsToRevalidate),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Revalidation error", error: String(err) },
      { status: 500 }
    );
  }
}
