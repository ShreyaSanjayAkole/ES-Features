
const studentGrades = {
    shreya: 85,
    sam: 92,
    shiv: 88,
  };
  
  const entries = Object.entries(studentGrades);
  console.log(entries);
  
  const curvedGrades = entries.map(([name, grade]) => [name, grade + 5]);
  console.log(curvedGrades);
  
  const newGrades = Object.fromEntries(curvedGrades);
  console.log(newGrades);
  