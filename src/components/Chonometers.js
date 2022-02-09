import React from 'react';
import { Chronometer } from './Chronometer';

export const Chronometers = ({chronometers}) =>{ 
  
  
  if(!chronometers) return <h3>Loading . . . </h3>

  return (
    <>
    {
      chronometers.map(({id, title, proyect})=>
      <Chronometer
      key={id}
      title={title}
      proyect={proyect}  
      />
      )
    }
    </>
  )
} 