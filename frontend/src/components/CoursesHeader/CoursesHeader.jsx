import React from 'react';
import './CoursesHeader.css'; // Make sure the CSS file is correctly named and located

const CoursesHeader = ({ score, cp, birdness, usefulness, enjoyability, averageGrade }) => {
  return (
    <div className="card-component">
      <div className="score-section">
        <div className="score-circle">
          <div className='score-label'>Score</div>
          <div className='score'>{score}</div>
        </div>
        <div className="cp">CP {cp}</div>
      </div>
      <div className="stats-section">
        <div className="stat">Birdness {birdness}%</div>
        <div className="stat">Usefulness {usefulness}%</div>
        <div className="stat">Enjoyability {enjoyability}%</div>
        <div className='average'>
          <p>Average Grade</p>
          <div className="average-grade">{averageGrade}%</div>
        </div>
        
      </div>
    </div>
  );
};

export default CoursesHeader;
