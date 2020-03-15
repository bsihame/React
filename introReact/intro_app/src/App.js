import React from 'react';
import Person from './components/Person'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Person name={"Sihame" } age= {100}/>
      <Person name={"Faris" } age= {12}/>

      <Person name={"Bouchaib" } age= {51}/>

      
    </div>
  );
}
export default App;
