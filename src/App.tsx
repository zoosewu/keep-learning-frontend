import React from 'react'
import { Component as Layout } from './components/layout/layout'
import './App.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import type { Router } from '@remix-run/router'
import { containerRouter } from './containerRouter'

export interface NavLabel {
  label?: string
}
export const router: Router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: containerRouter
  }
] as RouteObject[])
const App = (): JSX.Element => {
  return (
    <div className='App'>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  )
}

export default App
