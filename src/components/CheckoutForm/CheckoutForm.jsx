import React from 'react'
import './checkoutform.css'
import { Formik } from 'formik'

function CheckoutForm({ data }) {
  console.log('ACA:', data);

  return (
    <div className='checkout__form'>
        <Formik
            initialValues={{ name: '', telephone: '', mail: '', address: '', }}

            validate={(values) => {
                let errors = {};
    
                if (!values.name) { errors.name = false } 
                else if (!/^[A-Z]{1,40} [A-Z]{1,40}$/i.test(values.name)) { errors.name = true }
    
                if (!values.mail) { errors.mail = false; } 
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) { errors.mail = true }
    
                if (!values.telephone) { errors.telephone = false } 
                else if (!/^[0-9\b]+$/.test(values.telephone)) { errors.telephone = true }
    
                if (!values.address) { errors.address = false } 
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
              <label htmlFor="name">Ingrese un nombre</label>
              <input type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
              { (errors.name && touched.name) && <p>hola</p> }

              <label htmlFor="telephone">Ingrese un teléfono</label>
              <input type="text" name="telephone" id="telephone" value={values.telephone} onChange={handleChange} onBlur={handleBlur} />
              { (errors.telephone && touched.telephone) && <p>hola</p> }

              <label htmlFor="mail">Ingrese un correo electrónico</label>
              <input type="mail" name="mail" id="mail" value={values.mail} onChange={handleChange} onBlur={handleBlur} />
              { (errors.mail && touched.mail) && <p>hola</p> }
              
              <label htmlFor="address">Ingrese una dirección</label>
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