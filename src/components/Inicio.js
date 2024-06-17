import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>
        Hola, Soy Almiron Augusto en Corrientes Argentina, ofrezco servicios de desarrollo web
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicacion web para tener mas visibilidad y relevancia en internet. 
        <Link to={'/Contacto'}>Contacta Conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2>Algunos de mis proyectos </h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <div className='works'>

        </div>
      </section>

    </div>
  )
}
