import React, { Suspense } from 'react'
import { Component as Header } from './header'
import { Component as Footer } from './footer'
import { Outlet, useNavigation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Component as Loading } from './Loading'
export const Component: React.FC = () => {
  const navigation = useNavigation()
  return (
    <>
      <Header />
      <Container fluid>
        <Suspense fallback={<Loading />}>
          {navigation.state !== 'idle' && <p>Navigation in progress...</p>}
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  )
}
