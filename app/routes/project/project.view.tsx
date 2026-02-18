import React from 'react'

import type { Route } from './+types/project.container'

export default function ProjectView({projectId}: {projectId: Route.ComponentProps['loaderData']}): React.JSX.Element {
  return (
    <>
      <h1>ProjectView</h1>
      <p>Details about a specific engineering project with ID: {projectId}</p>
    </>
  )
}
