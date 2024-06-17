import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>AA</span>
        <h3>Augusto Almiron WEB</h3>
      </div>       
      <nav>
        <ul>
          {/**Se utiliza la etiqueta navlink para que la pagina no tenga que recargar ! */}
            <li><NavLink to='/Inicio'>Inicio</NavLink></li>
            <li><NavLink to='/Contacto'>Contacto</NavLink></li>
            <li><NavLink to='/Curriculum'>Curriculum</NavLink></li>
            <li><NavLink to='/Servicios'>Servicios</NavLink></li>
            <li><NavLink to='/Portfolio'>Portafolio</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
