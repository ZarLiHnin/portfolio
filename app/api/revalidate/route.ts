// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const secretToken = process.env.REVALIDATE_SECRET;

type RevalidateRequestBody = {
  token?: string;
  path?: string;
};

export async function POST(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const tokenFromQuery = query.get("token");
  const pathFromQuery = query.get("path");

  let body: RevalidateRequestBody = {};
  try {
    const json = await req.json();
    if (typeof json === "object" && json !== null) {
      body = json;
    }
  } catch {
    // JSON parsing failed, ignore
  }

  const token = body.token ?? tokenFromQuery;
  const path = body.path ?? pathFromQuery;

  if (!token || token !== secretToken) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: "Missing path" }, { status: 400 });
  }

  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json(
      { message: "Revalidation error", error: String(err) },
      { status: 500 }
    );
  }
}
