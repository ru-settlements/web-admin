import { RouteObject } from 'react-router-dom'

import { BaseLayout } from '@/app/layouts/BaseLayout'
import { SignInLayout } from '@/app/layouts/SignInLayout'
import { Home } from '@/pages/Home'
import { Error404 } from '@/pages/NotFound'
import { SignIn } from '@/pages/Signin'
import { BASE_ROUTE, SIGN_IN_ROUTE } from '@/shared/Routing/config/consts'

export const ROOT_ROUTES: RouteObject[] = [
  {
    path: BASE_ROUTE,
    element: <BaseLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: SIGN_IN_ROUTE,
    element: <SignInLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
]
