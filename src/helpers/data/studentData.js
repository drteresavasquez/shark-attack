let students = [
  {
    id: 1,
    firstName: 'Trinity',
    lastName: 'Christiana',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Aja',
    lastName: 'W',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Dr.',
    lastName: 'T',
    isDead: false
  },
];

const livingStudents = () => students.filter((student) => !student.isDead);
const dearlyBeloved = () => students.filter((student) => student.isDead);

const makeDead = () => {
  const living = livingStudents();
  const randomStudent = living[Math.floor(Math.random() * living.length)];
  students[students.indexOf(randomStudent)].isDead = true;

  return [livingStudents(), dearlyBeloved()];
};

const reset = () => {
  students = students.map((student) => ({ ...student, isDead: false }));
  return [livingStudents(), dearlyBeloved()];
};

export {
  livingStudents, dearlyBeloved, makeDead, reset
};
