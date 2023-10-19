import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/ui/Footer'

export const LayoutPublic = () => {
  return (
    <div className='root'>
        <Navbar />
        <Outlet className='outlet'/>
        <Footer />
    </div>
  )
}
