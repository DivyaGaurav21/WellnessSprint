import React, { useState } from 'react';
import './App.css';
import Home from './homepage/home'
import Main from './components/Main';

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import DummyPage from './homepage/DummyPage';
import WellnessResources from './components/WellnessResources';
import ExcerciseChallenges from './components/ExcerciseChallenges';
import ProgressTracking from './components/ProgressTracking';
import MedicineRemind from './components/MedicineRemind';
import YogaChallenges from './components/YogaChallenges';
import MeditationChallenges from './components/MeditationChallenges';
import InstantTreatment from './components/InstantTreatment';
import WalkChallenges from './components/WalkChallenges';


function App() {
  const [points, setPoints] = useState(0);
  const [avatarPosition, setAvatarPosition] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const completeChallengeHandler = (pointsEarned) => {
    setPoints(points + pointsEarned);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (

    <BrowserRouter className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<DummyPage />} />
        <Route path='service' element={<DummyPage />} />
        <Route path='phone' element={<DummyPage />} />
        <Route path='contact' element={<DummyPage />} />
        <Route path='letstart' element={<WellnessResources />} >
          {/* <Route index element={<Navigate to='wellness' />} /> */}
          <Route path='medicine' element={<MedicineRemind />} />
          <Route path='yoga' element={<YogaChallenges />} />
          <Route path='meditation' element={<MeditationChallenges />} />
          <Route path='excercise' element={<ExcerciseChallenges completeChallenge={completeChallengeHandler} />} />
          <Route path='walk' element={<WalkChallenges />} />
          <Route path='progress' element={<ProgressTracking points={points} challengesCompleted={challengesCompleted} avatarPosition={avatarPosition} />} />
          <Route path='treatment' element={<InstantTreatment />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
