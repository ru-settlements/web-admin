import { useNavigate } from 'react-router-dom'
import { FC } from 'react'

export const Home: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>Home page</div>
      <button onClick={() => navigate('/dictionaries')}>Dictionary</button>
    </>
  )
}
