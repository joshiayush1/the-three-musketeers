import React from 'react'
import Home from "./home/Home.jsx"
import Models from "./modelss/Model.jsx"
import Abouts from "./about/About.jsx"
import Login from "./login/Login.jsx"
import History from './history/History.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser); 
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/model' element={authUser ? <Models />: <Navigate to="/login"/>} />
    <Route path='/history' element={authUser ? <History />: <Navigate to="/login"/>} />
    <Route path='/about' element={<Abouts />} />
    <Route path='/login' element={<Login />} />
    </Routes>
    <Toaster /> 
    </>
  )
}

export default App