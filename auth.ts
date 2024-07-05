import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from './lib/db';

import authConfig from './auth.config';
import { DEFAULT_LOGIN_REDIRECT } from './routes';

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async redirect({ url, baseUrl }) {
      return DEFAULT_LOGIN_REDIRECT;
    },
  },
  ...authConfig,
});
