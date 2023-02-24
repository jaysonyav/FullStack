// import React from 'react'

// //js
// const App = () => {
//     //js
//     let number =5;

//     let styles = {
//       color: 'red',
//       backgroundColor : 'green',
//       fontSize: '24px',   
//     }
//   return (
//     <div>
//         <h1> Number = {(number+3.333333).toFixed(2)}</h1>
//         <h2 style={styles} >This is red </h2>
//     </div>

//   )
// }

// export default App;

import React from 'react';
import './App.css';
function App() {

  const numOfStudents = 30;
  const numOfMentors = 8;
  const header = 'ReactJS Lesson';
  let bgCol = 'red';

  return (
    <div className='App' style={{backgroundColor:bgCol}}>
      <h1>{header}</h1>
      <p className='para'>There are {numOfStudents} number of students in class and {numOfMentors} number of members in class</p>
      <p className='param'>Total of {numOfMentors+numOfStudents} </p>
    </div>
  )
}

export default App