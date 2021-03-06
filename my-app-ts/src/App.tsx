import React from 'react';
import './App.css';
import robots from '../src/mockdata/robot.json'
import Robot from './components/Robot'

function App() {
  return (
    <ul>
      {robots.map(r =>
        <Robot
          id={r.id}
          email={r.email}
          name={r.name}
        />)
      }
    </ul>
  );
}

export default App;
