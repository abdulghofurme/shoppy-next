import { NextRequest } from "next/server";
import checkIsAuthenticated from "./util/authenticated";

const unAuthorizedRoutes = ['/auth/login', '/auth/signup']

export default async function middleware(request: NextRequest) {
	const auth = await checkIsAuthenticated()

	if (auth && unAuthorizedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
		return Response.redirect(new URL('/', request.url))
	}
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}