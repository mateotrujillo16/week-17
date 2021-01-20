import './App.css';
import Person from './Person/Person'
import { Component, useState } from 'react';

const app = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Mateo', age: 23 },
      { name: 'John', age: 29 }
    ]
  })

  const  switchNameHandler = () => {
      // console.log('was clicked')
      // DONT DO THIS: this.state.persons[0].name = 'Mateo Trujillo'
      setPersonsState({
        persons: [
        { name: 'Mateo Trujillo', age: 23 },
        { name: 'John', age: 29 }
      ] })
    };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsStates.persons[0].age}
      > 
        My hobbies: gaming
      </Person>
    </div>
  );
};


export default app;
