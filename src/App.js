import React, { useState } from 'react';
import './App.css';
import data from './data';
import { Chronometers } from './components/Chonometers';
import { Form } from './components/Form';
import idGenerator from './utils/idGenerator';

export const App = () => {

  const [chronometers, setChronometers] = useState([...data]);

  const createProject= (title, project)=>{ 
    const chronometer = {id: idGenerator(), title, project}  
    setChronometers([...chronometers, chronometer]);    
  } 

  const deleteProject = (id)=>{
    const newChronometers = chronometers.filter((chronometer)=>chronometer.id !== id);
    setChronometers(newChronometers)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cronometros</h2>       
      </header>
      <section>
        <Chronometers
          chronometers={chronometers}
          deleteProject={deleteProject}/>        
      </section>
      <section className="mt-4">
        <Form
          createProject={createProject}/>   
      </section>
    </div>
  );
}


