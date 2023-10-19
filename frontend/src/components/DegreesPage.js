import React from 'react'
import { useParams } from 'react-router-dom'
import { getDegreeById } from './selectors/getDegreeById';
import './DegreesPage.css'


export const DegreesPage = () => {

  const { carreraId } = useParams();

  const degree = getDegreeById(carreraId);
  console.log(degree.id);

  return (
    <div className='div-dp'>
      <div className='titulo-dp' >
        <h1>{degree.titulo}</h1>
        <p>{degree.facultad}</p>
        <a href={`/assetss/files/${degree.id}.pdf`} className='btn-pdf'>Plan de estudios</a>
      </div>
      <div className='content-info'>
        <p>INICIO: {degree.inicio}</p>
        <p>VALOR: {degree.valor}</p>
        <p>CRÉDITOS: {degree.creditos}</p>
        <p>SNIES: {degree.snies}</p>
        <p>SEDE: {degree.modalidad}</p>
        <p>NIVEL ACADÉMICO: {degree.nivel}</p>
        <p>DURACIÓN: {degree.semestres}</p>
        <p>MODALIDAD: {degree.modalidad}</p>
      </div>

      <div className='descrip-degrees'>
        <p>{degree.descripcion}</p>
        <img src={`/assetss/carreras/${degree.id}.png`} alt='csu-areandina' />
      </div>

      <div className='descrip-info'>
        <h1>En lo que te vas a transformar</h1>
        <p>{degree.aspiracion}</p>
        <h1>tus gustos y habilidades fortalecen tu decisión</h1>
        <p>{degree.buscas}</p>
        <h1>este programa tiene lo que buscas</h1>
        <p>{degree.gustos}</p>
      </div>
    </div>
  )
}
