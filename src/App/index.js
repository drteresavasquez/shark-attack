import React, { useState } from 'react';
import { livingStudents, makeDead } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLivingStudents] = useState(livingStudents());
  const [dearlyBeloved, setDearlyBeloved] = useState([]);

  const sharkAttack = () => {
    const [live, dead] = makeDead();
    setLivingStudents(live);
    setDearlyBeloved(dead);
  };

  return (
    <div className='App'>
      <button onClick={sharkAttack}>Shark Attack</button>
      <h2>Shark Tank</h2>
      {liveStudents.map((student) => student.firstName)}
      <h2>Graveyard</h2>
      {dearlyBeloved.map((student) => student.firstName)}
    </div>
  );
}

export default App;
