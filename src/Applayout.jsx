import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

const Applayout = () => {
  return (
    
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout
