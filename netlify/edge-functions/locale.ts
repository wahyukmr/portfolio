export default async (request: Request) => {
	const url = new URL(request.url);

	if (url.pathname === "/") {
		const cookie = request.headers.get("cookie") || "";
		const match = cookie.match(/locale=(en|id)/);
		const locale = match ? match[1] : "en";

		return Response.redirect(`${url.origin}/${locale}`, 302);
	}

	return;
};
