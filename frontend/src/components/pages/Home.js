import React from 'react'
import Banner1 from '../../assets/Banner1.png'
import Video from '../../assets/video.mp4'
import { CardSlider } from '../CardSlider';



const cards = [
  { title: 'Tarjeta 1', description: 'Contenido de la tarjeta 1' },
  { title: 'Tarjeta 2', description: 'Contenido de la tarjeta 2' },
  { title: 'Tarjeta 3', description: 'Contenido de la tarjeta 3' },
  { title: 'Tarjeta 4', description: 'Contenido de la tarjeta 4' },
  { title: 'Tarjeta 5', description: 'Contenido de la tarjeta 5' },
  { title: 'Tarjeta 6', description: 'Contenido de la tarjeta 6' },
  // Agrega más tarjetas según sea necesario
];


export const Home = () => {
  return (
    <>
      <img src={ Banner1 } className='Banner1' alt='CSU AREANDINA'/>
      <section className='csu-section'>
        <div className='div-csu'>
          <div className='text-csu'>
            <h1>CSU YOPAL</h1>
            <p>Los Centros de Servicio Universitario son espacios físicos que ofrece la institución, donde estudiantes de la modalidad virtual tienen al alcance asesores que los guían y resuelven dudas en todo lo concerniente a sus estudios a través de la metodología virtual.</p>
          </div>
      
          <div>
            <video src={Video} className='video1' loop autoPlay muted ></video>
          </div>
        </div>

      </section>
      <div className='conta'>
        <section className='slider'>
          <h1>Programas de Interés</h1>
          <CardSlider cards= {cards} />
        </section>
      </div>
        
    </>
  )
}
