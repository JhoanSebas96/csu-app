import React from 'react'
import img1 from '../../assets/escritorio.png'
import img2 from '../../assets/lapiz.png'
import img3 from '../../assets/libro.png'
import './about.css'

export const About = () => {
  return (
    <div className='container'>
      <div>
        <div className='textos'>
          <h1>Nosotros </h1>
          <p>La Fundación Universitaria del Área Andina empezó sus labores académicas en 1983 con el sueño de contribuir al desarrollo sostenible de las diferentes regiones del país con excelencia y compromiso social.
          </p>
          <p>Actualmente, ofrecemos acceso equitativo a diferentes grupos sociales mediante una oferta académica innovadora, pertinente, actualizada y flexible en las estrategias de formación presencial y virtual, con el  n de formar excelentes ciudadanos, profesionales éticos, emprendedores y socialmente responsables, a través de la aplicación de los diferentes campos del saber.
          </p>
        </div>

        <img src={img1} className='img1' alt='CSU AREANDINA' />
      </div>

      <div className='mision'>
        <img src={img2} className='img1' alt='CSU AREANDINA' />
        <div className='textos'>
          <h1>Misión</h1>
          <p>Contribuir al desarrollo sostenible con calidad y pertinencia mediante la apropiación, aplicación y transferencia de conocimiento y la formación integral y permanente de personas, desde un enfoque humanista, y de pensamiento crítico y reflexivo.</p>
        </div>
      </div>
      <div className='vision'>
        <div className='textos'>
          <h1>Visión</h1>
          <p>A 2030, Areandina será una Institución Universitaria, que ha impactado las regiones de Colombia, siendo reconocida por su contribución a la transformación social y desarrollo sostenible, desde su enfoque académico. </p>
        </div>
        <img src={img3} className='img1' alt='CSU AREANDINA' />
      </div>
    </div>
  )
}
