import React, { useState } from 'react';
import './App.css';
import data from './data';
import { Chronometers } from './components/Chonometers';
import { Form } from './components/Form';
import idGenerator from './utils/idGenerator';

export const App = () => {

  const [chronometers, setChronometers] = useState([...data]);
  const [showForm, setShowForm] = useState(false);

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
        {showForm ?
          <Form
            createProject={createProject}
            setShowForm={setShowForm}/> 
        :
          <button onClick={() => setShowForm(true)} type="button" className="btn btn-outline-secondary btn-lg fw-bold mt-3"> + </button>  
        }
        </section>

    </div>
  );
}


