import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Contacto } from '../components/Contacto'
import { Curriculum } from '../components/Curriculum'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Servicios } from '../components/Servicios'
import { Footers } from '../layout/Footers'
import { HeaderNav } from '../layout/HeaderNav'

export const MisRutas = () => {
  return (
    <BrowserRouter>
    {/* HEADER Y NAVEGACION*/}
    <HeaderNav/>
  


    {/* CONTENIDO CENTRAL*/}
    <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path='/portafolio' element={<Portafolio/>}></Route>
        <Route path='/servicios' element={<Servicios/>}></Route>
        <Route path='/curriculum' element={<Curriculum/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
    </Routes>
    {/* FOOTER */}
    <Footers/>

    </BrowserRouter>
  )
}
