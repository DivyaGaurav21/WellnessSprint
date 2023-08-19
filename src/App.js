import React, { useState } from 'react';
import './App.css';
import Home from './homepage/home'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  const completeChallengeHandler = (pointsEarned) => {
    setPoints(points + pointsEarned);
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
          <Route path='yoga' element={<YogaChallenges completeChallenge={completeChallengeHandler} />} />
          <Route path='meditation' element={<MeditationChallenges completeChallenge={completeChallengeHandler} />} />
          <Route path='excercise' element={<ExcerciseChallenges completeChallenge={completeChallengeHandler} />} />
          <Route path='walk' element={<WalkChallenges completeChallenge={completeChallengeHandler} />} />
          <Route path='progress' element={<ProgressTracking points={points} />} />
          <Route path='treatment' element={<InstantTreatment />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
