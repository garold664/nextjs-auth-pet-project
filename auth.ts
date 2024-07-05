import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from './lib/db';

import authConfig from './auth.config';
import { DEFAULT_LOGIN_REDIRECT } from './routes';
import { getUserById } from './data/user';

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token }) {
      if (!token.sub) return session;

      session.user.role = token.role;
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
    },
    async redirect({ url, baseUrl }) {
      return DEFAULT_LOGIN_REDIRECT;
    },
  },
  ...authConfig,
});
