import React, { ReactNode, useEffect } from 'react'
import styled from '@emotion/styled'
import Footer from './molecules/Footer'
import Header from './molecules/Header'
import NextNProgress from 'nextjs-progressbar'
import { color, media } from '../styles'
import Menu from './molecules/Menu'


type Props = {
  children:ReactNode
}

const Layout = ({ children}: Props) => {
  
  return (
    <Wrapper>
      <NextNProgress
        color={color.primary}
      />
      <Left>
        <Menu/>
      </Left>
      <Right id='homeView'>
        {children}
      </Right>
    </Wrapper>
  )
}

export default Layout


const Wrapper = styled.div`
    position: relative;
    height:100vh;
    max-width:1040px;
    margin:0 auto;
    padding:56px 0 0;
    display: grid;
    grid-template-columns:1fr auto;
    gap:32px;
    ${media.sp`
    width:100%;
    
    `}
    `

const Left = styled.div`
    background-color: blueviolet;
    width: 200px;
`

const Right = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: visible;
`