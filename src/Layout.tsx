import React from "react";
import Header from "./components/Header";

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <div>hello from layout</div>
      <Header />
      <div>{children}</div>
    </>
  )
}