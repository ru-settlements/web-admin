import { RouteObject } from 'react-router-dom'

import { Root } from '@/app/ui/Root'
import { Home } from '@/pages/Home'
import { Error404 } from '@/pages/NotFound'
import { ROOT_ROUTE } from '@/shared/Routing/config/consts'

export const ROOT_ROUTES: RouteObject[] = [
  {
    path: ROOT_ROUTE,
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]
