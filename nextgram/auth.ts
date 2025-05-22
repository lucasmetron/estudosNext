import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "@/db";

const config = {
  providers: [Google],
  callbacks: {
    signIn: async ({ user }) => {
      const existigUser = await db.user.findFirst({
        where: { email: user.email },
      });

      if (!existigUser) {
        await db.user.create({
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
            emailVerified: new Date(),
          },
        });
      } else {
        await db.user.update({
          where: { id: existigUser.id },
          data: {
            name: user.name,
            image: user.image,
            emailVerified: new Date(),
          },
        });
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(config);
