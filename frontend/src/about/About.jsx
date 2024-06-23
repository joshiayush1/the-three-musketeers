import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx'
import About from '../components/About.jsx'

const Abouts = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white relative'>
    <Navbar />
    <About />
    <Footer />
    </div>
    </>
  )
}

export default Abouts