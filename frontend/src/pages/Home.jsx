import React from "react";
import backgroundImage from '../assets/WLU-Hero.jpg';

const Home = () => {
  return (
    <div>
      <div
        className="hero  min-h-screen "
        style={{
          backgroundImage:
            `url(${backgroundImage})`,
        }}
      >

        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="text-center text-neutral-content">
          <div className="ml-10 text-white">
            <h1 className="mb-5 text-8xl font-bold">Welcome to WLUGO</h1>
            <p className="mb-5 text-xl">
              Explore thousands of courses based on reviews from WLU students
            </p>
            <div className="form-control">
              <input type="text" placeholder="Search for courses..." className="input input-bordered w-24 md:w-auto bg-white" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
