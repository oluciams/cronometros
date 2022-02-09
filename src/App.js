import React, { useState } from 'react';
import './App.css';
import data from './data';
import { Chronometers } from './components/Chonometers';
import { Form } from './components/Form';

export const App = () => {

  const [chronometers, setChronometers] = useState([...data]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cronometros</h2>       
      </header>
      <section>
      <Chronometers chronometers={chronometers}/>
      </section>
      <section className="mt-4">
      <Form/>   
      </section>
    </div>
  );
}


