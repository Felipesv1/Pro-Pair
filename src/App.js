import React from 'react'
import Header from './Components/Header/index'
import Main from './Components/Main/index'
import Footer from './Components/Footer/index'
import {GlobalStyle} from './GlobalStyle/GlobalStyle'

export default function App(){

  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}