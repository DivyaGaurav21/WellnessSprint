import React from 'react';
import './App.css';
import Home from './homepage/home'
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DummyPage from './homepage/DummyPage';


function App() {

  return (

    <BrowserRouter className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='letstart' element={<Main />} />
        <Route path='about' element={<DummyPage />} />
        <Route path='service' element={<DummyPage />} />
        <Route path='phone' element={<DummyPage />} />
        <Route path='contact' element={<DummyPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
