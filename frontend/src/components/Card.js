import React from 'react'
import { Link } from 'react-router-dom'
 

export const Card = ({ id, titulo, semestres, descripcion, imagen }) => {
  return (
    <Link to={`./${id}`} className='cardOf'>
      <img src={`./assetss/carreras/${id}.png`} alt='csu-areandina' className='card__img' />
      <div className='card__descr-wrapper'>
        <p className='card__title'>{titulo}</p>
        <div className='card__links'>
          <div>
            <p className='link' >{semestres}</p>
          </div>
          <div>
            <p className='link' >Virtual</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
