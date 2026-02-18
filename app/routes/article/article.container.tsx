import React from 'react'

import type { Route } from './+types/article.container'
import ArticleView from './article.view'

export async function loader({params}: Route.LoaderArgs) {
  const { articleId } = params
  // Fetch article details using articleId
  // For example:
  // const article = await fetchArticleById(articleId)
  // return article

  return articleId  // Placeholder return value
}


export default function ArticleContainer({loaderData}: Route.ComponentProps): React.JSX.Element {
  return (
    <ArticleView articleId={loaderData} />
  )
}
