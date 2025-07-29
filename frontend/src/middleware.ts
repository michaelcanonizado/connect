import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isAuthenticated = true

  if (!isAuthenticated) {
    console.log(`Middleware: Not Authenticated on ${path}`)
    return NextResponse.redirect(new URL('/home', request.url))
  }

  console.log(`Middleware: Authenticated on ${path}`)
  return NextResponse.next()
}

export const config = {
  matcher: ['/chats/:path*', '/archived/:path*', '/requests/:path*']
}
