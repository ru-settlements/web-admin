import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <div>hello from layout</div>
      <Header />
      <NavBar />
      <div>{children}</div>
    </>
  )
}
