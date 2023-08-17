import React from 'react'
import './ExcerciseChallenges.css'

const ExcerciseChallenges = ({ completeChallenge }) => {


    const challenges = [
        { id: 1, name: 'Stretch Challenge', points: 10 },
        { id: 2, name: 'Yoga Challenge', points: 15 },
        { id: 3, name: 'Yoga Challenge', points: 15 },
        { id: 4, name: 'Yoga Challenge', points: 15 },
        { id: 5, name: 'Yoga Challenge', points: 15 },
        { id: 6, name: 'Yoga Challenge', points: 15 },
        // Add more challenges
    ];


    return (
        <section className="exercise-challenges">
            <h2>Exercise Challenges</h2>
            <div className="challenge-list">
                {challenges.map((challenge) => (
                    <button key={challenge.id} onClick={() => completeChallenge(challenge.points)}>
                        {challenge.name}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default ExcerciseChallenges