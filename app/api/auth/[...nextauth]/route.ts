import { authOptions } from "@/shared/constants/auth-options";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// 1g. Import necessary lines
// 1h(end). Create get-user-session.ts in lib folder  of shared
