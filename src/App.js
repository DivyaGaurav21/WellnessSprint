import { useState } from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import ExcerciseChallenges from './components/ExcerciseChallenges';
import SocialInteraction from './components/SocialInteraction';
import WellnessResources from './components/WellnessResources';
import ProgressTracking from './components/ProgressTracking';
import UserProfileSetting from './components/UserProfileSetting';


function App() {
  const [points, setPoints] = useState(0);
  const [avatarPosition, setAvatarPosition] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const completeChallengeHandler = (pointsEarned) => {
    setPoints(points + pointsEarned);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <div className="App">
      <Dashboard points={points} challengesCompleted={challengesCompleted} avatarPosition={avatarPosition} />
      <ExcerciseChallenges completeChallenge={completeChallengeHandler} />
      <ProgressTracking />
      <SocialInteraction />
      <UserProfileSetting />
      <WellnessResources />
    </div>
  );
}

export default App;
