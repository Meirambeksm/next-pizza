import NextAuth from "next-auth"; /*1c*/
import GitHubProvider from "next-auth/providers/github"; /*1d*/

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ] /*1e*/,
};

const handler = NextAuth(authOptions); /*1f*/
export { handler as GET, handler as POST }; /*1g*/

// 1h. Go to .env file and paste the following lines: "GITHUB_ID= and GITHUB_SECRET=" and come back
// 1i. Visit: github.com => Settings => Developer settings => OAuth Apps => New OAuth app => Register [Application name: next-pizza; Homepage URL: http://localhost:3000/; Authorization callback URL: http://localhost:3000/api/auth/callback/github] => Register application
// 1j. Save Client ID: Ov23liL9yYJ3IywmvYuz to GITHUB_ID in .env file
// 1k. Generate a new client secret and save Client Secret: ad6b52fe867df09c13d81a2177a9e7ec6623b44f to GITHUB_SECRET in .env file and come back
// 1l(end). Create and go to providers.tsx in shared of components
