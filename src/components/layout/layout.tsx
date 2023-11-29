import React from 'react'
import { Component as Header } from './header'
import { Component as Footer } from './footer'
import { Component as Main } from './main'
export const Component: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
