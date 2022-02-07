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
    </div>
  );
}


