import React, { ReactNode, useEffect } from 'react'
import styled from '@emotion/styled'
import Footer from './molecules/Footer'
import Header from './molecules/Header'


type Props = {
  children:ReactNode
}

const Layout = ({ children}: Props) => {
  
  return (
    <Container>
      <Header />
      {children}
      <Footer></Footer>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  background-color: transparent;
  position: relative;
  height:100vh;
`
