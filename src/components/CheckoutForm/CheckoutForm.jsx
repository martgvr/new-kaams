import React from 'react'
import './checkoutform.css'
import { Formik } from 'formik'

function CheckoutForm({ data }) {
  return (
    <div className='checkout__form'>
        <Formik
            initialValues={{ name: '', telephone: '', mail: '', address: '', }}

            validate={(values) => {
                let errors = {};
    
                if (!values.name) { errors.name = 'Por favor ingrese un nombre' } 
                else if (!/^[A-Z]{1,40} [A-Z]{1,40}$/i.test(values.name)) { errors.name = 'El nombre solo puede contener letras y espacios' }
    
                if (!values.mail) { errors.mail = 'Por favor ingrese un correo electrónico' } 
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) { errors.mail = 'El correo debe tener el formato tuemail@proveedor.com' }
    
                if (!values.telephone) { errors.telephone = 'Por favor ingrese un teléfono' } 
                else if (!/^[0-9\b]+$/.test(values.telephone)) { errors.telephone = 'El teléfono solo puede contener números' }
    
                if (!values.address) { errors.address = 'Por favor ingrese una dirección' } 
                else if (!/^[A-Z]{1,40} [0-9\b]{1,6}$/i.test(values.address)) { errors.address = true }
    
                return errors;
            }}
              
          onSubmit={(values) => {
            let total = 0;
            data.forEach(item => total += (item.price * item.quantity));
            const dataToWrite = { buyer: { ...values }, items: [...data], total: total, date: new Date() }

            console.log(dataToWrite);

            // clearCart(); // Limpia el carrito
            // addToDatabase({ dataToWrite }); // Llama a la función addToDatabase
            // navigate("../", { replace: true });
          }}>

          {({ errors, values, touched, handleSubmit, handleChange, handleBlur }) => (
            <form className='checkout__form--fields flex-column' onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre y Apellido</label>
              <input type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
              { (errors.name && touched.name) && <p>{errors.name}</p> }

              <label htmlFor="telephone">Teléfono</label>
              <input type="text" name="telephone" id="telephone" value={values.telephone} onChange={handleChange} onBlur={handleBlur} />
              { (errors.telephone && touched.telephone) && <p>hola</p> }

              <label htmlFor="mail">Correo electrónico</label>
              <input type="mail" name="mail" id="mail" value={values.mail} onChange={handleChange} onBlur={handleBlur} />
              { (errors.mail && touched.mail) && <p>hola</p> }
              
              <label htmlFor="address">Dirección</label>
              <input type="text" name="address" id="address" value={values.address} onChange={handleChange} onBlur={handleBlur} />
              { (errors.address && touched.address) && <p>hola</p> }

              <button type="submit">Finalizar compra</button>
            </form>
          )}
            
        </Formik>
    </div>
  )
}

export default CheckoutForm