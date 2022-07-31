import { NextResponse } from 'next/server';

export function middleware(req, res) {
  const { pathname, origin } = req.nextUrl;
  if (pathname === '/') return NextResponse.redirect(`${origin}/home`);

  return NextResponse.next();
}
