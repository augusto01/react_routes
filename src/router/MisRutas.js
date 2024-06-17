import React from 'react'
import { Route,Routes,BrowserRouter,NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Curriculum } from '../components/Curriculum'
import { Servicios } from '../components/Servicios'
import { Contacto } from '../components/Contacto'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/**HEADER Y NAVEGACION */}
        <HeaderNav>

        </HeaderNav>
        


        {/**CONTENT */}
        <Routes>
            <Route path='/' element = {<Inicio/>}></Route>
            <Route path='/Inicio' element = {<Inicio/>}></Route>
            <Route path='/Portafolio' element = {<Portafolio/>}></Route>
            <Route path='/Servicios' element = {<Servicios/>}></Route>
            <Route path='/Contacto' element = {<Contacto/>}></Route>
            <Route path='/Curriculum' element = {<Curriculum/>}></Route>
        </Routes>

        

        {/**FOOTER */} 
        <Footer></Footer>
    </BrowserRouter>
  )
}
