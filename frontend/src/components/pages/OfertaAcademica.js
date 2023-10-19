import React from 'react'
import { Card } from '../../components/Card'
import { Carreras } from '../data/Degrees'
import '../pages/oferta.css'


export const OfertaAcademica = () => {
  const agruparCarrerasPorCategoria = (carreras) => {
    const carrerasPorCategoria = {};

    carreras.forEach((carrera) => {
      const { categoria } = carrera;

      if (!carrerasPorCategoria[categoria]) {
        carrerasPorCategoria[categoria] = [];
      }

      carrerasPorCategoria[categoria].push(carrera);
    });

    return carrerasPorCategoria;
  };

  const carrerasPorCategoria = agruparCarrerasPorCategoria(Carreras);

  return (
    <div className='body-oa'>
      {Object.entries(carrerasPorCategoria).map(([categoria, carreras]) => (
        <div className='content-card' key={categoria}>
          <div className='titulo-div'>
            <p className='title-of'>{categoria}</p>
          </div>
          <div className='card-grid'>
            {carreras.map((categoria, index) => (
              <Card key={index} {...categoria} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
