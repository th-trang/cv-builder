import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'vn', 'de']

const publicPages = [
    "/",
    "/welcome",
    "/resume-details"
];

const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: 'always'
});

export default function middleware(request: NextRequest) {

    const publicPathnameRegex = RegExp(
        `^(/(${locales.join("|")}))?(${publicPages
            .flatMap((p) => (p === "/" ? ["", "/"] : p))
            .join("|")
            .replace(/:id/g, "[^/]+")})/?$`,
        "i",
    );

    if (request.nextUrl.pathname === "/") {
        const url = request.nextUrl.clone();
        url.pathname = "/welcome";
        return NextResponse.redirect(url);
    }

    if (request.nextUrl.pathname === "/en" || request.nextUrl.pathname === "/vn" || request.nextUrl.pathname === "/de") {
        const url = request.nextUrl.clone();
        url.pathname = "/welcome";
        return NextResponse.redirect(url);
    }

    const isPublicPage = publicPathnameRegex.test(request.nextUrl.pathname);

    if (isPublicPage) {
        return intlMiddleware(request);
    } else {}
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
