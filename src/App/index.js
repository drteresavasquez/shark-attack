import React, { useState } from 'react';
import students from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [allStudents, setAllStudents] = useState(students);

  const livingStudents = allStudents.filter((student) => !student.isDead);
  const dearlyBeloved = allStudents.filter((student) => student.isDead);

  const sharkAttack = () => {
    const randomStudent = livingStudents[Math.floor(Math.random() * livingStudents.length)];

    setAllStudents((prevState) => {
      const index = prevState.indexOf(randomStudent);
      const newArray = [...prevState];
      newArray[index].isDead = true;

      return newArray;
    });
  };

  return (
    <div className='App'>
      <button onClick={sharkAttack}>Shark Attack</button>
      <h2>Shark Tank</h2>
      {livingStudents.map((student) => student.firstName)}
      <h2>Graveyard</h2>
      {dearlyBeloved.map((student) => student.firstName)}
    </div>
  );
}

export default App;
