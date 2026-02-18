import { index, layout, prefix, route,type RouteConfig } from "@react-router/dev/routes";

export default [
  ...prefix(':locale', [
		layout('routes/layout/layout.container.tsx', [
			index('routes/home/home.container.tsx'),

			...prefix('projects', [
				index('routes/projects/projects.container.tsx'),
				route(':projectId', 'routes/project/project.container.tsx'),
			]),
      
      ...prefix('articles', [
        index('routes/articles/articles.container.tsx'),
        route(':articleId', 'routes/article/article.container.tsx'),
      ]),
			route('about', 'routes/about/about.container.tsx'),
		]),
		route('*', 'routes/not_found/not-found.container.tsx'),
  ]),
] satisfies RouteConfig;
