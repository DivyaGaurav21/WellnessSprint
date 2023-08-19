import React, { useState } from 'react';
import './WalkChallenges.css';

const WalkChallenges = ({ completeChallenge }) => {
    const [completedChallenges, setCompletedChallenges] = useState([]);
    const [points, setPoints] = useState(0);

    const walkChallenges = [
        {
            title: 'Morning Stroll',
            description: 'Take a 15-minute walk in the morning.',
            points: 10,
        },
        {
            title: 'Afternoon Lunch Walk',
            description: 'Go for a 15-minute walk in the afternoon.',
            points: 20,
        },
        {
            title: 'After Dinner Walk',
            description: 'Go for a 15-minute walk after dinner.',
            points: 20,
        },
    ];

    const handleChallengeCompletion = (challengeTitle, challengePoints) => {
        if (!completedChallenges.includes(challengeTitle)) {
            setCompletedChallenges([...completedChallenges, challengeTitle]);
            setPoints(points + challengePoints);
            completeChallenge(challengePoints);
        }
    };

    return (
        <div className="walk-challenges-container">
            <h2>Walk Challenges</h2>
            <p>Points earned: {points}</p>
            <div className="challenge-list">
                {walkChallenges.map((challenge, index) => (
                    <div key={index} className="challenge">
                        <h3>{challenge.title}</h3>
                        <p>{challenge.description}</p>
                        <button
                            className="complete-button"
                            onClick={() =>
                                handleChallengeCompletion(challenge.title, challenge.points)
                            }
                            disabled={completedChallenges.includes(challenge.title)}
                        >
                            {completedChallenges.includes(challenge.title)
                                ? 'Completed'
                                : 'Complete'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalkChallenges;
