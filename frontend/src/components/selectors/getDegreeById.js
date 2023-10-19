import {Carreras} from '../data/Degrees'

export const getDegreeById = ( id ) => {
  return Carreras.find( carrera => carrera.id === id);
}
