import { getServerSession } from "next-auth";
import { authOptions } from "../constants/auth-options";

export const getUserSession = async () => {
  const session = await getServerSession(authOptions);

  return session?.user ?? null;
}; /*2a*/

// 2b. Create profile folder in (root) folder of app
// 2c(end). Create and go to page.tsx in profile folder
