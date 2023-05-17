import React from 'react'
import './app.css'
import NavBar from './Componets/NavBar/NavBar'
import Home from './Componets/Home/Home'
import Main from './Componets/Main/Main'
import Footer from './Componets/Footer/Footer'

const app = () => {
  return (
    <div className='travelWebSite'>
    <NavBar/>
    <Home/>
    <Main/>
    <Footer/> 
    </div>

  )


}

export default app