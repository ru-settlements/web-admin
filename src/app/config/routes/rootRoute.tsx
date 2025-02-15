import { RouteObject } from 'react-router-dom'
import {
  DICTIONARIES_ROUTE,
  DICTIONARY_ITEM_ROUTE,
  ROOT_ROUTE,
} from '@/shared/Routing/config/consts'
import { Error404 } from '@/pages/NotFound'
import { Root } from '@/app/ui/Root'
import { Home } from '@/pages/Home'
import { Dictionaries } from '@/pages/Dictionaries'
import { DictionariesId } from '@/pages/DictionariesId'

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
      {
        path: DICTIONARIES_ROUTE,
        element: <Dictionaries />,
      },
      {
        path: DICTIONARY_ITEM_ROUTE,
        element: <DictionariesId />,
      },
    ],
  },
]
