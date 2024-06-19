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
          {/**La funcion isActive lo unico que hace es cargar la clase active cuando el navlink esta presionado para cargar el resaltado*/}
            <li><NavLink to='/Inicio'className={({isActive})=> isActive ? 'active': ''}>Inicio</NavLink></li>
            <li><NavLink to='/Contacto'className={({isActive})=> isActive ? 'active': ''}>Contacto</NavLink></li>
            <li><NavLink to='/Curriculum'className={({isActive})=> isActive ? 'active': ''}>Curriculum</NavLink></li>
            <li><NavLink to='/Servicios'className={({isActive})=> isActive ? 'active': ''}>Servicios</NavLink></li>
            <li><NavLink to='/Portfolio'className={({isActive})=> isActive ? 'active': ''}>Portafolio</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
