import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1>Contacto</h1>

      <form className='contact' action='mailto:almironaugusto404@gmail.com'>
        <input type='text' placeholder='Nombre' ></input>
        <input type='text' placeholder='Apellido' ></input>
        <input type='email' placeholder='Email' ></input>
        <input type='textarea' placeholder='Motivo del Contacto' required></input>
        <input type='submit' value={'Enviar'}></input>
      </form>
    </div>
  )
}
