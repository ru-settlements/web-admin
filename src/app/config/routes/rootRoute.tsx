import { RouteObject } from 'react-router-dom'
import {
  DICTIONARIES_ROUTE,
  DICTIONARY_ITEM_ROUTE,
  FEATURES_ROUTE,
  POSTS_ROUTE,
  ROOT_ROUTE,
  SEARCH_ROUTE,
} from '@/shared/Routing/config/consts'
import { Error404 } from '@/pages/NotFound'
import { Root } from '@/app/ui/Root'
import { Home } from '@/pages/Home'
import { Posts } from '@/pages/Posts'
import { Dictionaries } from '@/pages/Dictionaries'
import { Features } from '@/pages/dictionaries/Features'
import { Search } from '@/pages/dictionaries/Search'
import { DictionaryId } from '@/pages/dictionaries/DictionaryId'

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
        path: POSTS_ROUTE,
        element: <Posts />,
      },
      {
        path: DICTIONARIES_ROUTE,
        element: <Dictionaries />,
        children: [
          {
            index: true,
            path: FEATURES_ROUTE,
            element: <Features />,
          },
          {
            path: SEARCH_ROUTE,
            element: <Search />,
          },
          {
            path: DICTIONARY_ITEM_ROUTE,
            element: <DictionaryId />,
          },
        ],
      },
    ],
  },
]
