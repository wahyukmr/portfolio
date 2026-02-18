import React from 'react'
import { Outlet } from 'react-router'

export default function LayoutView(): React.JSX.Element {
  return (
    <>
      <h1>LayoutView</h1>
      <Outlet />
    </>
  )
}
