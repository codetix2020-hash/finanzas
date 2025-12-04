import { routing } from "@i18n/routing";
import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware(routing);

// AUTENTICACIÓN COMPLETAMENTE DESHABILITADA
// Todas las validaciones de sesión y auth eliminadas
export default async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl;

	// Aplicar middleware de internacionalización solo para rutas con locale
	if (pathname.startsWith("/en/") || pathname.startsWith("/es/")) {
		return intlMiddleware(req);
	}

	// Para todas las demás rutas (/app, /auth, etc), permitir acceso directo sin validación
	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!api|image-proxy|images|fonts|_next/static|_next/image|favicon.ico|icon.png|sitemap.xml|robots.txt).*)",
	],
};
