import React from 'react';
import { Chronometer } from './Chronometer';


export const Chronometers = ({chronometers, deleteProject}) =>{ 

  if(!chronometers) return <h3>Loading . . . </h3>

  return (
    <>
      {
        chronometers.map(({id, title, project})=>
          <Chronometer
            key={id}
            id={id}
            title={title}
            project={project}
            deleteProject={deleteProject}  
          />
        )
      }    
    </>
  )  
} 