import type { Config } from "@react-router/dev/config";

const SUPPORTED_LOCALES = ["en", "id"];

export default {
	ssr: true,
	future: {
		v8_middleware: true,
	},
	// TODO: masih perlu di optimalkan untuk prerender, karena method getSTaticPaths hanya menangani static paths, sedangkan untuk dynamic paths seperti projectId dan articleId masih belum bisa di handle dengan baik.
	prerender: [
		...SUPPORTED_LOCALES.map((locale) => `/${locale}`),
		...SUPPORTED_LOCALES.map((locale) => `/${locale}/projects`),
		...SUPPORTED_LOCALES.map((locale) => `/${locale}/articles`),
		...SUPPORTED_LOCALES.map((locale) => `/${locale}/article/1`),
		...SUPPORTED_LOCALES.map((locale) => `/${locale}/project/1`),
		...SUPPORTED_LOCALES.map((locale) => `/${locale}/about`),
	],
} satisfies Config;
