import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const config = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [Google],
  callbacks: {
    authorized: ({ request, auth }) => {
      // antes de chegar em qualquer rota, passa por aqui
      const { pathname } = request.nextUrl;

      if (pathname === "/middleware") {
        // página que queremos proteger
        return !!auth;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(config);

// 👇 Adicione isso no final do arquivo
export const configMatcher = {
  matcher: ["/middleware"],
};
