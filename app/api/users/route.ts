import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany(); /*2*/
  return NextResponse.json(users); /*3*/
}

export async function POST(req: NextRequest) {
  const data = await req.json(); /*5*/
  const user = await prisma.user.create({
    data,
  }); /*6*/

  return NextResponse.json(user); /*7*/
}

// 4. Check with the url: http://localhost:3000/api/users
// 8. Check with postman
// 9. Go to shcema.prisma
