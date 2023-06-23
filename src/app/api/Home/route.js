import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=born&key=AIzaSyBU-sGFsZQqq7eQo4UAnkdFAVR3RR_uBo4"
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
