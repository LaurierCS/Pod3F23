import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Course from './pages/Course';
import Home from './pages/Home';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import Signup from './pages/Signup';
import Table from './pages/Table';
import About from './pages/About';
import AddReviewForm from './components/AddReviewForm';

import DarkMode from './components/DarkMode';








{/* THIS IS THE HEAD PAGE -- WHERE YOU IMPORT ALL THE COMPONENTS IN */}


function App() {
  DarkMode();
  return (
    <Router>
      <div className="App min-h-screen font-roboto">
        <Header/>
        <DarkMode/>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/table' element={<Table/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/addreview' element={<AddReviewForm/>}/>

        </Routes>



      </div>
      <Footer/>
    </Router>
  );
}

export default App;
