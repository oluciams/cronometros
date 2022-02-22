import React from 'react';
import { Chronometer } from './Chronometer';
import { Form } from './Form';


export const Chronometers = ({chronometers, createProject, deleteProject, updateProject, chronoToEdit, setChronoToEdit, showForm, setShowForm}) =>{ 

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
            setShowForm={setShowForm} 
            showForm={showForm}          
            createProject={createProject}
            updateProject={updateProject} 
             
            // titleToEdit={el.title}
            // projectToEdit={el.project}           
            />
          :                      
            <Chronometer
              key={el.id}      
              el={el}
              deleteProject={deleteProject}              
              setChronoToEdit={setChronoToEdit}
              setShowForm={setShowForm}
              createProject={createProject}
              updateProject={updateProject} 
            />                      
        ))
      } 
       
    </>
  )  
} 