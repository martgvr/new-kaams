import './notfound.css'
import React from 'react'

function NotFound() {
  return (
    <div className='notfound__container flex-column'>
        <h2>Error 404</h2>
        <p>Recurso no encontrado :(</p>
    </div>
  )
}

export default NotFound