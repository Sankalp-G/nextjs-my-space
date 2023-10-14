import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter"
import type { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    jwt: async ({token, user, account, profile}) => {
      if (user) {
        token.id = user.id;
      }
      return Promise.resolve(token);
    },
    session: async ({session, user}) => {
      session.user.id = user.id;
      return Promise.resolve(session);
    }
  },
}
