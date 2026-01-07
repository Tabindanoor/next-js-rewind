import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: "hehehehehe hello world api route" });
}

