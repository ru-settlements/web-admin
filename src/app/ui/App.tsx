import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/shared/styles/global.scss'
import { ROOT_ROUTES } from '@/app/config/routes/rootRoute'

const router = createBrowserRouter(ROOT_ROUTES)

export const App = () => {
  return <RouterProvider router={router} />
}
