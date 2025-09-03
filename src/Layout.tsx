import React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <div>hello from layout</div>
      <div>{children}</div>
    </>
  )
}
