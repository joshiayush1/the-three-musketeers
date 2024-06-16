import React from 'react'
import Home from "./home/Home.jsx"
import Models from "./modelss/Model.jsx"
import Abouts from "./about/About.jsx"
import Login from "./login/Login.jsx"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
    {/* <Route path='/' element={<Login />} /> */}
    <Route path='/' element={<Home />} />
    <Route path='/model' element={<Models />} />
    <Route path='/about' element={<Abouts />} />
    </Routes>
    </>
  )
}

export default App