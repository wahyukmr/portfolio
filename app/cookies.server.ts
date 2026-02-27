import { createCookie } from "react-router";

interface CookieOptions {
	path?: string;
	sameSite?: "lax" | "strict" | "none";
	httpOnly?: boolean;
	secure?: boolean;
	maxAge?: number;
}

export function initializeCookie(name: string, options: CookieOptions = {}) {
	return createCookie(name, {
		path: "/",
		sameSite: "lax",
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24 * 365,
		...options,
	});
}
