import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const RootLayout: FC = () => {
  return (
    <div>
      header aside another
      <Outlet />
    </div>
  )
}
