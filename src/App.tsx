import React from 'react'
import { Component as Layout } from './components/layout/layout'
import './App.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import type { Router } from '@remix-run/router'

interface NavLabel {
  label?: string
}
export type ContainerRouter = RouteObject & NavLabel

export const containerRouter: ContainerRouter[] = [
  {
    index: true,
    lazy: async () => await import('./components/exercise')
  },
  {
    path: 'exercise',
    label: '測驗',
    lazy: async () => await import('./components/exercise')
  },
  {
    path: 'category',
    label: '領域',
    lazy: async () => await import('./components/category')
  },
  {
    path: 'subject',
    label: '內容',
    lazy: async () => await import('./components/subject')
  },
  {
    path: 'reducerDispatch',
    label: 'Reducer',
    lazy: async () => await import('./components/reducerDispatch')
  },
  { path: '*', lazy: async () => await import('./components/noMatch') }
]
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
