import { Link, Outlet } from 'react-router-dom'
import dictionaryListData from '@/data/dictionary.json'
import { FC } from 'react'
const dictionaryList = dictionaryListData

export const Dictionaries: FC = () => {
  return (
    <>
      <div>Dictionaries page</div>

      <ul>
        <li>
          <Link to={'search'}>Search</Link>
          <Link to={'features'}>Features</Link>
        </li>
      </ul>

      <ul>
        {dictionaryList.map((item) => (
          <li key={item.id}>
            <Link to={`/dictionaries/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  )
}
