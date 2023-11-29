import type { NavLabel } from './App'
import type { RouteObject } from 'react-router-dom'
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
    // async loader ({ request, params }) {
    //   const { loader } = await import('./projects-loader') ///
    //   return loader({ request, params })
    // },
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
