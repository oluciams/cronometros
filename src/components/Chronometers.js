import React from 'react';
import { Chronometer } from './Chronometer'

export const Chronometers = ({chronometers, deleteProject, updateProject}) =>{ 

  if(!chronometers) return <h3>Loading . . . </h3>

  return (
    <>     
      {
        chronometers.map((el) => (                      
            <Chronometer
              key={el.id}      
              el={el}
              deleteProject={deleteProject}
              updateProject={updateProject}        
            />                      
        ))
      } 
       
    </>
  )  
} 