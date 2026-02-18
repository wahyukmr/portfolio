import React from 'react'

import type { Route } from './+types/project.container'
import ProjectView from './project.view'

export async function loader({params}: Route.LoaderArgs) {
  const { projectId } = params
  // Fetch project details using projectId
  // For example:
  // const project = await fetchProjectById(projectId)
  // return project
  
  return projectId  // Placeholder return value
}

export default function ProjectsContainer({loaderData}: Route.ComponentProps): React.JSX.Element {
  return (
    <ProjectView projectId={loaderData} />
  )
}
