import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code"); /*3b*/

    if (!code) {
      return NextResponse.json({ error: "Неверный код" }, { status: 400 });
    } /*3c*/

    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        code,
      },
    }); /*3d*/

    if (!verificationCode) {
      return NextResponse.json({ error: "Неверный код" }, { status: 400 });
    } /*3e*/

    await prisma.user.update({
      where: {
        id: verificationCode.userId,
      },
      data: {
        verified: new Date(),
      },
    }) /*3f*/;

    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id,
      },
    }) /*3g*/;

    return NextResponse.redirect(new URL("/?verified", req.url)); /*3h*/
  } catch (err) {
    console.error(err);
    console.log("[VERIFY_GET] Server error", err);
  } /*3a*/
}

// 3h(end). Go to header.tsx in shared of components
