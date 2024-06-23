import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import History from '../components/History.jsx'

const Historys = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white relative">
    <Navbar />
    <History />
    <Footer />
    </div>
    </>
  )
}

export default Historys