import "./app.css";

import React from "react";
import {
	data,
	isRouteErrorResponse,
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import { initializeCookie } from "./cookies.server";

const SUPPORTED_LOCALES = ["en", "id"];

export async function loader({ params, request }: Route.LoaderArgs) {
	if (!SUPPORTED_LOCALES.includes(params.locale || "")) {
		throw new Response("Locale not supported", { status: 404 });
	}

	const cookieHeader = request.headers.get("Cookie");
	const theme = await initializeCookie("theme").parse(cookieHeader);

	return data({ theme, locale: params.locale });
}

export function Layout({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element {
	const { theme, locale } = useRouteLoaderData<typeof loader>("root") || {
		theme: "dark",
		locale: "en",
	};

	return (
		<html lang={locale} className={theme}>
			<head>
				<meta
					name="google-site-verification"
					content="your-verification-code"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="author" content="Wahyu Komarudin Hidayah" />
				<meta name="robots" content="all" />
				<meta name="googlebot" content="notranslate" />

				{/* Open Graph */}
				<meta property="og:type" content="website" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:domain" content="nama-domain-anda.com" />

				{/* PWA */}
				<meta name="theme-color" content="#f0f5f9" />
				<meta name="msapplication-TileColor" content="#f0f5f9" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="msapplication-config" content="/browserconfig.xml" />

				{/* Favicons */}
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>

				{/* Apple Touch Icons */}
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>

				{/* Google Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.cdnfonts.com/css/general-sans"
					rel="stylesheet"
				/>

				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App(): React.JSX.Element {
	return <Outlet />;
}

export function ErrorBoundary({
	error,
}: Route.ErrorBoundaryProps): React.JSX.Element {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="container mx-auto p-4 pt-16">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full overflow-x-auto p-4">
					<code>{stack}</code>
				</pre>
			)}

			<Link to="/" className="btn btn__secondary">
				tombol home
			</Link>
		</main>
	);
}
