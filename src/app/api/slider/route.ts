import { NextResponse } from "next/server";
import DUMMY from "./slider-data.json";

export async function GET() {
  const data = DUMMY;

  return NextResponse.json(data);
}
