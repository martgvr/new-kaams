import './checkout.css'
import React from 'react'

function Checkout() {
  return (
    <div className='checkout__container flex-column'>

        <div className='checkout__breadcrumb flex-row'>
            <div className='checkout__breadcrumb--firstLine'></div>
            <div className='checkout__breadcrumb--secondLine'></div>
            <div className='checkout__breadcrumb--item done'>
                <h2>1</h2>
                <p>Agregar productos al carrito</p>
            </div>
            <div className='checkout__breadcrumb--item active'>
                <h2>2</h2>
                <p>Completar tus datos personales</p>
            </div>
            <div className='checkout__breadcrumb--item'>
                <h2>3</h2>
                <p>Nos pondremos en contacto con vos</p>
            </div>
        </div>

        <h1>Estamos muy cerca de finalizar tu pedido :D</h1>
        <p>Completá tus datos personales con información real, tené en cuenta que vamos a utilizar esos datos para comunicarnos con vos, y así coordinar el pago y el envío.</p>
    
        <div className='checkout__form'>form</div>
    </div>
  )
}

export default Checkout