import React, { useState } from 'react';
import { livingStudents, makeDead, reset } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLivingStudents] = useState(livingStudents());
  const [dearlyBeloved, setDearlyBeloved] = useState([]);

  const sharkAttack = () => {
    const [live, dead] = makeDead();
    setLivingStudents(live);
    setDearlyBeloved(dead);
  };

  const startOver = () => {
    const [live, dead] = reset();
    setLivingStudents(live);
    setDearlyBeloved(dead);
  };

  return (
    <div className='App'>
      <button onClick={sharkAttack} disabled={ liveStudents.length ? '' : 'disabled'}>{ liveStudents.length ? 'Shark Attack' : 'ALL DEAD'}</button>
      <button onClick={startOver}>RESET</button>
      <h2>Shark Tank</h2>
      {liveStudents.map((student) => student.firstName)}
      <h2>Graveyard</h2>
      {dearlyBeloved.map((student) => student.firstName)}
    </div>
  );
}

export default App;
