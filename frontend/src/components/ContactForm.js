import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ContactForm = () => {

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Correo electronico no válido').required('El correo electrónico es requerido'),
    message: Yup.string().required('El mensaje es requerido'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        alert('Correo enviado con éxito');
        resetForm();
      }
    } catch (error) {
      console.error('Error al enviar el correo', error);
    }
  };

  return (
    <div className='form-container'  >
      <h1>Contáctanos</h1>
      <p>Nuestro amable equipo estará encantado de conocerte</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className='form' >
            <div className='group'>
              <label htmlFor='name'>Nombre</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name='name' component='div' className='error' />
            </div>
            <div className='group'>
              <label htmlFor='email'>Correo Electronico</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name='email' component='div' className='error' />
            </div>
            <div className='group'>
              <label htmlFor='message'>Mensaje</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name='message' component='div' className='error em' />
            </div>
            <button type='submit' >Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
