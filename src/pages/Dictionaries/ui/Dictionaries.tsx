import { Link, Outlet } from 'react-router-dom'
import dictionaryListData from '@/data/dictionary.json'
import { Button } from '@/components/ui/button.tsx'
const dictionaryList = dictionaryListData

export const Dictionaries = () => {
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
            <Button>
              <Link to={`/dictionaries/${item.id}`}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  )
}
