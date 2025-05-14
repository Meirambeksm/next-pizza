import { prisma } from "@/prisma/prisma-client";
import { getUserSession } from "@/shared/lib/get-user-session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUserSession(); /*5b*/

    if (!user) {
      return NextResponse.json(
        { message: "Вы не авторизованы" },
        { status: 401 }
      );
    } /*5c*/

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    }); /*5d*/

    return NextResponse.json(data); /*5e*/
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "[USER_GET Server error" },
      { status: 500 }
    );
  } /*5a*/
}

// 5f(end). Go to page.tsx in checkout folder of (checkout) of app
