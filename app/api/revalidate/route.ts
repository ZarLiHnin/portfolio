// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const secretToken = process.env.REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = req.nextUrl.searchParams.get("token");

  if (!token || token !== secretToken) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const { path } = body;

  if (!path) {
    return NextResponse.json({ message: "Missing path" }, { status: 400 });
  }

  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json(
      { message: "Revalidation error", error: err },
      { status: 500 }
    );
  }
}
