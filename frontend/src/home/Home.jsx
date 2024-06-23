import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white relative'>
    <Navbar />
    <Banner />
    <Footer />
    </div>
    </>
  )
}

export default Home