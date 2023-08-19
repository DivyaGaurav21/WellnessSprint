import React from 'react';
import './ProgressTracking.css';

function ProgressTracking({ points }) {
    const targetPoints = 100;
    const progressPercentage = (points / targetPoints) * 100;

    return (
        <section className="progress-tracking">
          <h2>Progress Tracking on Gaining Points</h2>
          <div className="graph-container">
              <div className="progress-graph">
                  <div className="progress-bar" style={{ width: `${progressPercentage}%` }}>
                      {progressPercentage.toFixed(2)}%
                  </div>
              </div>
          </div>
          <p>Your Points: {points}</p>
          <p>Target Points: {targetPoints}</p>
      </section>
  );
}

export default ProgressTracking;

