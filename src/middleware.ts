import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip the login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for the admin_token cookie
    const token = request.cookies.get('admin_token')?.value;

    // If no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};