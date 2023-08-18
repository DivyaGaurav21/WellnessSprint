import React from 'react';
import './Dashboard.css';

function Dashboard({ points, challengesCompleted, avatarPosition }) {
    return (
        <section className="dashboard">
            <div className="dashboard-stats">
                <p>Points: {points}</p>
                <p>Challenges Completed: {challengesCompleted}</p>
            </div>
            <div className="virtual-world">
                <div className="avatar" style={{ left: avatarPosition + 'px' }} />
            </div>
        </section>
    );
}

export default Dashboard;
