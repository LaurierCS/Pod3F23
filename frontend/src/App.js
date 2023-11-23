import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footnote from './components/Footer/Footer';
import './App.css';


import Home from './pages/Home';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import Course from './pages/Course';


{/* THIS IS THE HEAD PAGE -- WHERE YOU IMPORT ALL THE COMPONENTS IN */}


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        {/* IMPORTS the course table component into the main react file */}
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
        </Routes>

      </div>
      <Footnote/>
    </Router>
  );
}

export default App;
