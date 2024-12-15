/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
}; /*3*/

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
} /*4*/

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton(); /*5*/

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = prisma; /*6*/

// 7. Create schema.prisma in prisma folder and go to schema.prisma
