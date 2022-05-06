import React from 'react';
import progress from './progress.png';
import './Progress.css';

const Progress = () => (
  <div className="progress-container">
    <img src={progress} alt="progress" />
    <div className="percentage-holder">
      <h3>64%</h3>
      <p>Completed</p>
    </div>
  </div>
);

export default Progress;
