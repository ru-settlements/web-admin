import { useNavigate } from 'react-router-dom'

import { Alert } from '@/shared/ui/alert.tsx'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>Home page</div>
      <Alert variant="destructive">hello there</Alert>
      <button onClick={() => navigate('/dictionaries')}>Dictionary</button>
    </>
  )
}
