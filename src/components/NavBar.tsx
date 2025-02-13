import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/'}>Главная</NavLink>
        </li>
        <li>
          <NavLink to={'/dictionaries'}>Справочник</NavLink>
        </li>
        <li>
          <NavLink to={'/posts'}>Посты</NavLink>
        </li>
      </ul>
    </>
  )
}
