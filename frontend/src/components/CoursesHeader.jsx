import React from "react";
import { Link } from "react-router-dom";

const CoursesHeader = () => {
  return (
    <div className="bg-gray-300 p-6 w-full max-w-4xl mx-auto shadow-md mb-10 mt-10 rounded-md text-black">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
        <div className="text-8xl font-bold mb-5">CP 164</div>
          <div className="flex">
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm mb-4 mr-4">
            <span className="text-lg font-semibold mr-2">Score:</span>
            <span className="text-2xl font-bold">88</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm mb-4">
            <span className="text-lg font-semibold mr-2">Average Grade: </span>
            <span className="text-2xl font-bold">88</span>
          </div>
          </div>

         
        </div>
        <div className="flex-row  mr-12">
          <div className='flex items-center justify-end'><p>Bird</p><progress className="progress progress-primary w-48" value={10} max="100"></progress></div>
          <div className='flex items-center justify-end'><p>Useful</p><progress className="progress progress-primary w-48" value={10} max="100"></progress></div>
          <div className='flex items-center justify-end'><p>Enjoyed</p><progress className="progress progress-primary w-48" value={10} max="100"></progress></div>
          
        </div>
        
      </div>

      <div className="flex justify-end">
        <Link to='/addreview'><button className="btn bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 border-blue-600">+ Add Review</button></Link>
      </div>
    </div>
  );
};

export default CoursesHeader;
