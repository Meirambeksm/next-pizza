import { prisma } from "@/prisma/prisma-client";
import { getUserSession } from "@/shared/lib/get-user-session";
import { NextResponse } from "next/server";

export const dynamic =
  "force-dynamic"; /*1j and for more info see time: 22-44-00*/

export async function GET() {
  try {
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json(
        { message: "Вы не авторизованы" },
        { status: 401 }
      );
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "[USER_GET Server error" },
      { status: 500 }
    );
  }
}

// 1k. Go to package.json and add postinstall": "prisma generate" in scripts and come back
// 1l. Create .env.local and copy .env in it
// 1m(end). Go to page.tsx in (root) of app
