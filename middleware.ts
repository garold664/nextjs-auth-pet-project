import NextAuth from 'next-auth';

import authConfig from './auth.config';
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req) {
  const isLoggedIn = !!req.auth;
  // console.log('isLoggedIn: ', isLoggedIn);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
