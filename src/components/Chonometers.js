import React from 'react';
import { Chronometer } from './Chronometer';
import { Form } from './Form';


export const Chronometers = ({chronometers, deleteProject, chronoToEdit, setChronoToEdit}) =>{ 

  if(!chronometers) return <h3>Loading . . . </h3>

  return (
    <>    
      {
        chronometers.map(({id, title, project}) => (
          
          chronoToEdit ?            
            <Form
            key={id}
            titleToEdit={title}
            projectToEdit={project}
            />
          :                      
            <Chronometer
              key={id}
              id={id}
              title={title}
              project={project}
              deleteProject={deleteProject}              
              setChronoToEdit={setChronoToEdit}
            />                      
        ))
      } 
      {console.log(chronoToEdit)}   
    </>
  )  
} 