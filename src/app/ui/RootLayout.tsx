import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
      header aside another
      <Outlet />
    </div>
  )
}
