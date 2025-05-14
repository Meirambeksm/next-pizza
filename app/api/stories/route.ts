import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const stories = await prisma.story.findMany({
    include: {
      items: true,
    },
  });
  return NextResponse.json(stories);
} /*4f*/

// 4g. Terminal: npm install --save react-insta-stories
// 4h(end). Go to stories.tsx in shared folder of components
