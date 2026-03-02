import React from "react";

import type { Route } from "./+types/article.container";

export default function ArticleView({
	articleId,
}: {
	articleId: Route.ComponentProps["loaderData"];
}): React.JSX.Element {
	return (
		<>
			<h1>ArticleView</h1>
			<p>Details about a specific article or blog post with ID: {articleId}</p>
		</>
	);
}
