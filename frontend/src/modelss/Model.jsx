import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx'
import Model from '../components/Model.jsx'

const Models = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white relative'>
    <Navbar />
    <Model />
    <Footer />
    </div>
    </>
  )
}

export default Models