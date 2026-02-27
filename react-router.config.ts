import type { Config } from "@react-router/dev/config";

export default {
	ssr: true,
	future: {
		v8_middleware: true,
	},
	// TODO: masih perlu di optimalkan untuk prerender, karena method getSTaticPaths hanya menangani static paths, sedangkan untuk dynamic paths seperti projectId dan articleId masih belum bisa di handle dengan baik.
	prerender: async ({ getStaticPaths }) => {
		const staticPaths = await getStaticPaths();
		return [...staticPaths];
	},
	// prerender: ['/about', '/projects', '/article/1', '/project/1'],
} satisfies Config;
