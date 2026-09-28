import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db"; // your prisma client instance
import { hashPassword, verifyPassword } from "./password";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql", // or "mysql", "sqlite", ...etc
  }),
  baseURL:
    process.env.BETTER_AUTH_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  emailAndPassword: {
    enabled: true,
    password: {
      hash: hashPassword,
      verify: verifyPassword,
    },
  },
});
