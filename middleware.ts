import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SUPPORTED_LANGS } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const firstSegment = pathname.split('/')[1]
  if (SUPPORTED_LANGS.includes(firstSegment as 'en' | 'es')) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname === '/' ? '' : pathname}`

  // Rewrite root so cofirsttimebuyergrants.com/ is indexable (not a redirect)
  if (pathname === '/') {
    return NextResponse.rewrite(url)
  }

  // Permanent redirect for all other non-prefixed paths
  return NextResponse.redirect(url, { status: 308 })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
