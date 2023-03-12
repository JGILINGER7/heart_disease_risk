import React from 'react';
import './App.css';
import HeartDiseaseRiskForm from '../HeartDiseaseRiskForm/HeartDiseaseRiskForm';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BehindTheScenes from '../BehindTheScenes/BehindTheScenes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeartDiseaseRiskForm />} />
        <Route path="/BehindTheScenes" element={<BehindTheScenes />} />
      </Routes>
    </>
  );
}

export default App;