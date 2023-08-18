import React, { useState } from 'react'
import Dashboard from './Dashboard';
import ExcerciseChallenges from './ExcerciseChallenges';
import ProgressTracking from './ProgressTracking';
import SocialInteraction from './SocialInteraction';
import UserProfileSetting from './UserProfileSetting';
import WellnessResources from './WellnessResources';


const Main = () => {

    const [points, setPoints] = useState(0);
    const [avatarPosition, setAvatarPosition] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const completeChallengeHandler = (pointsEarned) => {
        setPoints(points + pointsEarned);
        setChallengesCompleted(challengesCompleted + 1);
    };

    return (
        <div>
            <Dashboard points={points} challengesCompleted={challengesCompleted} avatarPosition={avatarPosition} />
            <ExcerciseChallenges completeChallenge={completeChallengeHandler} />
            <ProgressTracking />
            <SocialInteraction />
            <UserProfileSetting />
            <WellnessResources />

        </div>
    )
}

export default Main