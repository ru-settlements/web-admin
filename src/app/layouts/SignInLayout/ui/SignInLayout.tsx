import { Outlet } from 'react-router-dom'

export const SignInLayout = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Outlet />
    </div>
  )
}
