import React, { useState } from 'react';
import './App.css';
import data from './data';
import { Chronometers } from './components/Chronometers';
import { Form } from './components/Form';
import idGenerator from './utils/idGenerator';

export const App = () => {

  const [chronometers, setChronometers] = useState([...data]);
  const [showForm, setShowForm] = useState(false);
  const [chronoToEdit, setChronoToEdit] = useState(null); 

  const createProject= (title, project)=>{ 
    const chronometer = {id: idGenerator(), title, project}  
    setChronometers([...chronometers, chronometer]);
    setShowForm(false)    
  }
 
  const deleteProject = (id)=>{
    const newChronometers = chronometers.filter((chronometer)=>chronometer.id !== id);
    setChronometers(newChronometers)
  }

  const updateProject = (id, title, project)=> { 
    let newChronometers = chronometers.map(chronometer => {
      if(chronometer.id === id){ 
        chronometer.title = title
        chronometer.project = project
      } 
      return chronometer
    })    
    setChronometers(newChronometers)
    setChronoToEdit(null)
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cronometros</h2>       
      </header>
      <section>
        <Chronometers
          chronometers={chronometers}
          deleteProject={deleteProject}
          setChronoToEdit={setChronoToEdit}
          chronoToEdit={chronoToEdit}              
          updateProject={updateProject}               
        />        
      </section>      
      <section className="mt-4">
        {showForm ?
          <Form
            createProject={createProject}            
            setShowForm={setShowForm}    
          /> 
        :
          <button onClick={() => setShowForm(true)} type="button" className="btn btn-outline-secondary btn-lg fw-bold mt-3"> + </button>         
        }
        </section>       
    </div>
  );
}


