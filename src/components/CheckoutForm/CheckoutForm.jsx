import React from "react"
import "./checkoutform.css"
import { Formik } from "formik"
import { useNavigate } from "react-router-dom"

import emailjs from '@emailjs/browser'

import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css'

function CheckoutForm({ data, clearCart }) {
	const navigate = useNavigate()
	emailjs.init(import.meta.env.VITE_PUBLIC_KEY)

	return (
		<div className="checkoutform__container">
			<Formik
				initialValues={{ name: "", telephone: "", mail: "", address: "", city: "", neighborhood: "" }}
				validate={(values) => {
					let errors = {}

					if (!values.name) {
						errors.name = true
					} else if (!/^[A-Z]{1,40} [A-Z]{1,40}$/i.test(values.name)) {
						errors.name = "El nombre solo puede contener letras y espacios"
					}

					if (!values.mail) {
						errors.mail = true
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
						errors.mail = "El correo debe tener el formato tu@email.com"
					}

					if (!values.telephone) {
						errors.telephone = true
					} else if (!/^[0-9\b]+$/.test(values.telephone)) {
						errors.telephone = "El teléfono solo puede contener números"
					}

					if (!values.address) {
						errors.address = true
					} else if (!/^[A-Z0-9]{1,40} [0-9\b]{1,6}$/i.test(values.address)) {
						errors.address = "La dirección debe tener el formato Calle Altura"
					}

					if (!values.city) {
						errors.city = true
					} else if (!/^[A-Z0-9]{1,40}[\s]{0,1}[A-Z0-9]{0,40}$/i.test(values.city)) {
						errors.city = "La ciudad solo puede contener 2 palabras"
					}

					if (!values.neighborhood) {
						errors.neighborhood = true
					} else if (!/^[A-Z0-9]{1,40}[\s]{0,1}[A-Z0-9]{0,40}$/i.test(values.neighborhood)) {
						errors.neighborhood = "El barrio solo puede contener 2 palabras"
					}
					return errors
				}}

				onSubmit={(values) => {
					let orderNumber = Math.floor(Math.random() * 10000000)
					let total = 0
					data.forEach((item) => (total += item.price * item.quantity))

					let articles = ''
					data.map(item => articles += `ID: ${item.uid} | Nombre: ${item.name} | Talle: ${item.size} | Precio unidad: ${item.price} | Cantidad: ${item.quantity}\n`)

					const buyer = `Nombre: ${values.name}\nTeléfono: ${values.telephone}\nCorreo electrónico: ${values.mail}\nDirección: ${values.address}\nCiudad: ${values.city}\nBarrio: ${values.neighborhood}`

					emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID ,{
						order: orderNumber,
						buyer: buyer,
						total: total,
						articles: articles,
					})
					.then((result) => {
						alertify.success('La orden fue cargada con éxito. Redirigiendo...')
						setTimeout(() => {
								navigate("../success", { replace: true, state: { orderNumber: orderNumber } })
								clearCart()
							}, 2000);
						}, (error) => {
						alertify.error('No se pudo cargar la orden. Intente de nuevo en unos instantes.')
					});
				}}
			>
				{({ errors, values, touched, handleSubmit, handleChange, handleBlur, resetForm }) => (
					<form className="checkout__form flex-column" onSubmit={handleSubmit}>
						<div className="checkout__form--boxes flex-row">
							<div className="form__box">
								<div>
									<label htmlFor="name">Nombre y Apellido</label>
									<input
										type="text"
										name="name"
										id="name"
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
										style={{ border: errors.name && touched.name ? "1px solid red" : "" || (!errors.name && touched.name) ? "1px solid green" : "" }}
									/>
									{errors.name && touched.name && <p>{errors.name}</p>}
								</div>
								<div>
									<label htmlFor="telephone">Teléfono</label>
									<input
										type="text"
										name="telephone"
										id="telephone"
										value={values.telephone}
										onChange={handleChange}
										onBlur={handleBlur}
                    style={{ border: errors.telephone && touched.telephone ? "1px solid red" : "" || (!errors.telephone && touched.telephone) ? "1px solid green" : "" }}
									/>
									{errors.telephone && touched.telephone && <p>{errors.telephone}</p>}
								</div>
								<div>
									<label htmlFor="mail">Correo electrónico</label>
									<input
										type="mail"
										name="mail"
										id="mail"
										value={values.mail}
										onChange={handleChange}
										onBlur={handleBlur}
                    style={{ border: errors.mail && touched.mail ? "1px solid red" : "" || (!errors.mail && touched.mail) ? "1px solid green" : "" }}
									/>
									{errors.mail && touched.mail && <p>{errors.mail}</p>}
								</div>
							</div>

							<div className="form__box">
								<div>
									<label htmlFor="address">Dirección</label>
									<input
										type="text"
										name="address"
										id="address"
										value={values.address}
										onChange={handleChange}
										onBlur={handleBlur}
                    style={{ border: errors.address && touched.address ? "1px solid red" : "" || (!errors.address && touched.address) ? "1px solid green" : "" }}
									/>
									{errors.address && touched.address && <p>{errors.address}</p>}
								</div>

								<div>
									<label htmlFor="address">Ciudad</label>
									<input
										type="text"
										name="city"
										id="city"
										value={values.city}
										onChange={handleChange}
										onBlur={handleBlur}
                    style={{ border: errors.city && touched.city ? "1px solid red" : "" || (!errors.city && touched.city) ? "1px solid green" : "" }}
									/>
									{errors.city && touched.city && <p>{errors.city}</p>}
								</div>

								<div>
									<label htmlFor="address">Barrio</label>
									<input
										type="text"
										name="neighborhood"
										id="neighborhood"
										value={values.neighborhood}
										onChange={handleChange}
										onBlur={handleBlur}
                    style={{ border: errors.neighborhood && touched.neighborhood ? "1px solid red" : "" || (!errors.neighborhood && touched.neighborhood) ? "1px solid green" : "" }}
									/>
									{errors.neighborhood && touched.neighborhood && <p>{errors.neighborhood}</p>}
								</div>
							</div>
						</div>

            <div className="checkout__form--buttons flex-row">
						  <button type="reset" onClick={resetForm}>Limpiar formulario</button>
						  <button type="submit">Finalizar compra</button>
            </div>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default CheckoutForm
