import './App.css'
import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/shared/styles/global.scss'
import { ROOT_ROUTES } from '@/app/config/routes/rootRoute'

const router = createBrowserRouter(ROOT_ROUTES)

export const App: FC = () => {
  return <RouterProvider router={router} />
}
