import CourseTable from './components/Course Table/CourseTable';
import Header from './components/Header/Header';
import Footnote from './components/Footer/Footer';
import './App.css';

      {/* THIS IS THE HEAD PAGE -- WHERE YOU IMPORT ALL THE COMPONENTS IN */}


function App() {
  return (
    <div className="App">
      {/* IMPORTS the course table component into the main react file */}
      <Header/>
      <CourseTable/>
      <Footnote/>
    </div>
  );
}

export default App;
