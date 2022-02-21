import React from 'react';
import { Chronometer } from './Chronometer';
import { Form } from './Form';


export const Chronometers = ({chronometers, deleteProject, chronoToEdit, setChronoToEdit}) =>{ 

  if(!chronometers) return <h3>Loading . . . </h3>

  return (
    <>     
      {
        chronometers.map((el) => (
          
          chronoToEdit === el ?            
            <Form
            key={el.id}
            el={el}
            chronoToEdit={chronoToEdit}    
            // titleToEdit={el.title}
            // projectToEdit={el.project}           
            />
          :                      
            <Chronometer
              key={el.id}      
              el={el}
              deleteProject={deleteProject}              
              setChronoToEdit={setChronoToEdit}
            />                      
        ))
      } 
       
    </>
  )  
} 