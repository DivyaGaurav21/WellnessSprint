import React from 'react';
import './ProgressTracking.css';

function ProgressTracking() {
    // Sample data for progress tracking
    const weeklySteps = [3500, 4200, 5000, 4800, 6000, 5500, 6200];

    return (
        <section className="progress-tracking">
            <h2>Progress Tracking</h2>
            <div className="graph-container">
                {/* Replace this with a real progress graph */}
                <div className="progress-graph">
                    {weeklySteps.map((steps, index) => (
                        <div key={index} className="bar" style={{ height: `${(steps / 7000) * 100}px` }} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProgressTracking;
