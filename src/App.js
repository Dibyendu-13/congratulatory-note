import React, { useState, useEffect } from 'react';
import './App.css';
import WeddingPlannerUI from './components/WeddingPlannerUI';
import WeddingPlannerUI2 from './components/WeddingPlannerUI2';
import companyIcon from './images/topImage.png';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('WeddingPlannerUI'); // Initialize with WeddingPlannerUI2

  useEffect(() => {
    // After 5 seconds, switch to the second component
    const timer = setTimeout(() => {
      setCurrentComponent('WeddingPlannerUI2');
    }, 5000);

    // Cleanup timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div>
      <div className="company-logo">
        <img src={companyIcon} alt="Company Logo" />
      </div>

      {/* Render the current component conditionally */}
      {currentComponent === 'WeddingPlannerUI' && <WeddingPlannerUI />}
      {currentComponent === 'WeddingPlannerUI2' && <WeddingPlannerUI2 />}

    </div>
  );
};

export default App;
