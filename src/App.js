import React from 'react';
import './App.css';
import { Chronometer } from './components/Chronometer';
import { Form } from './components/Form';

export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cronometros</h2>       
      </header>
      <section>
      <Chronometer/>
      </section>
      <section className="mt-4">
      <Form/>
      <button type="button" className="btn btn-outline-secondary btn-lg fw-bold mt-3"> + </button>
      </section>
    </div>
  );
}


