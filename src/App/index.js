import React, { useState } from 'react';
import { livingStudents, makeDead, reset } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLivingStudents] = useState(livingStudents());
  const [dearlyBeloved, setDearlyBeloved] = useState([]);

  const doSumthin = (cb) => {
    const [live, dead] = cb();
    setLivingStudents(live);
    setDearlyBeloved(dead);
  };

  return (
    <div className='App'>
      <button onClick={() => doSumthin(makeDead)} disabled={ liveStudents.length ? '' : 'disabled'}>{ liveStudents.length ? 'Shark Attack' : 'ALL DEAD'}</button>
      <button onClick={() => doSumthin(reset)}>RESET</button>
      <h2>Shark Tank</h2>
      {liveStudents.map((student) => student.firstName)}
      <h2>Graveyard</h2>
      {dearlyBeloved.map((student) => student.firstName)}
    </div>
  );
}

export default App;
