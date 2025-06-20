// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const secretToken = process.env.REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { path, token } = await req.json();

    if (!token || token !== secretToken) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    if (!path) {
      return NextResponse.json({ message: "Missing path" }, { status: 400 });
    }

    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json(
      { message: "Revalidation error", error: String(err) },
      { status: 500 }
    );
  }
}
