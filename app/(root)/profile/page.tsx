import { prisma } from "@/prisma/prisma-client";
import { ProfileForm } from "@/shared/components";
import { getUserSession } from "@/shared/lib/get-user-session";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id),
    },
  }); /*4i*/

  if (!user) {
    return redirect("/not-auth");
  } /*4j*/

  //   return <div>THIS IS YOUR PROFILE</div>; it was with step 3a. To be replaced with step 4k
  return <ProfileForm data={user} /*4k*/ />;
} /*3a*/

// 3b. Create and go to info-block.tsx in shared folder of components
// 4l(end). Go to actions.ts in app folder
