import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: "Tabinda with a new enthusiasm" });
}

