import React, { ReactNode, useEffect } from 'react'
import styled from '@emotion/styled'
import Footer from './molecules/Footer'
import Header from './molecules/Header'
import NextNProgress from 'nextjs-progressbar'
import { color, media } from '../styles'
import Menu from './molecules/Menu'
import { AnimatePresence, motion } from 'framer-motion'


type Props = {
  children:ReactNode
}

const Layout = ({ children}: Props) => {
  const MenuWidth = 200
  return (
    <Wrapper paddingLeft={MenuWidth}>
      {/* <NextNProgress
        color={color.primary}
      /> */}
        <Menu width={MenuWidth}/>
        
        <AnimatePresence>
          
            {children}
          
        </AnimatePresence>
        
      
    </Wrapper>
  )
}

export default Layout


const Wrapper = styled.div<{paddingLeft:number}>`
    position: relative;
    height:100vh;
    max-width:1040px;
    margin:0 auto;
    padding-left: ${(props)=>props.paddingLeft}px;
    ${media.sp`
      width:100%;
      padding:0;
    
    `}
    `

const Left = styled.div`
    background-color: blueviolet;
    width: 200px;
`

const Contents = styled.div`
    width: 100%;
    
`