import React, { ReactNode, useEffect } from 'react'
import styled from '@emotion/styled'
import Footer from './molecules/Footer'
import Header from './molecules/Header'
import NextNProgress from 'nextjs-progressbar'
import { color, media } from '../styles'


type Props = {
  children:ReactNode
}

const Layout = ({ children}: Props) => {
  
  return (
    <Container>
      <NextNProgress
        color={color.primary}
      />
      {/* <Header /> */}
      {children}
      {/* <Footer></Footer> */}
    </Container>
  )
}

export default Layout

const Container = styled.div`
  background-color: ${color.background.base};
  position: relative;
  /* height:100vh; */
`
