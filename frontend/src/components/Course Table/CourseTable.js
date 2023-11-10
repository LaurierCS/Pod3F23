import React from 'react';
import './CourseTable.css';
// Define your courses array inside the same file as the component
const courses = [
  { name: 'Introduction to programming', code: 'CP104', useful: 'very', bird: 'yes', enjoy: 'no' },
  { name: 'Linear Algebra', code: 'MA122', useful: 'very', bird: 'NO RUN', enjoy: 'ABSOLUTELY NOT' },
  { name: 'Calculus I', code: 'MA103', useful: 'very', bird: 'yes', enjoy: 'no' },
  { name: 'Introduction to Differential Calculus', code: 'MA102', useful: 'very', bird: 'yes', enjoy: 'no' },
];

// Define the CourseTable component, which renders the table with courses data
const CourseTable = () => {
  return (
    <div>
      <h1>Course List</h1>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Useful</th>
            <th>Birdness</th>
            <th>Enjoyability</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.useful}</td>
              <td>{course.bird}</td>
              <td>{course.enjoy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;