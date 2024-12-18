import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const ingredients = await prisma.ingredient.findMany();
  return NextResponse.json(ingredients);
} /*3*/

// 4. Create search folder in products folder in api folder and create route.ts in search folder and go to route.ts
