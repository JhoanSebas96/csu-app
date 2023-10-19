import React from 'react';
import { MapLeaflet } from '../MapLeaflet';
import { ContactForm } from '../ContactForm';



export const Contact = () => {

  return (
    <div className='contact-page'>
      <img src={`/assetss/banner-contacto.png`} className='banner-contact' alt='csu-areandina' />
      <div className='map-contactform'>
        <MapLeaflet />
        <ContactForm  />
        
      </div>

    </div>
  )
}

