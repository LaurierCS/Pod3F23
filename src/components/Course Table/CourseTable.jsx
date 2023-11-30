import React,{useEffect,useState} from 'react';
import './CourseTable.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
// Define your courses array inside the same file as the component
/*const courses = [
  { name: 'Introduction to programming', code: 'CP104', useful: 'very', bird: 'yes', enjoy: 'no' },
  { name: 'Linear Algebra', code: 'MA122', useful: 'very', bird: 'NO RUN', enjoy: 'ABSOLUTELY NOT' },
  { name: 'Calculus I', code: 'MA103', useful: 'very', bird: 'yes', enjoy: 'no' },
  { name: 'Introduction to Differential Calculus', code: 'MA102', useful: 'very', bird: 'yes', enjoy: 'no' },
];*/


// Define the CourseTable component, which renders the table with courses data
const CourseTable = () => {
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    const getCourses = async ()=> {
      try{
        const res = await axios.get("http://localhost:5000/courses_list")
        setCourses(res.data)
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    getCourses();
  },[]);
  
  return (
    <div className = "coursesPage">
      <div className = "allCourses">
        {courses.map(courses => (
          <div className = "" key = {courses.course_id}>
            <div className = "coursePill">
                <Link to={`/course/${courses.course_id}`}>
                  <h1>{courses.course_id}</h1>
                </Link>

            <div className = "headline">
              <Link to={`/course/${courses.course_id}`}>
                <h1>{courses.course_name} </h1>
              </Link>
            </div>
          </div>
            <p>{courses.course_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTable;