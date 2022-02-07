import React from 'react';
import './App.css';
import { Chronometer } from './components/Chronometer';

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
      <button type="button" className="btn btn-outline-secondary btn-lg"> + </button>
      </section>
    </div>
  );
}


