import React, { useState } from "react";
import "./App.css";
import WeddingPlannerUI from "./components/WeddingPlannerUI";
import WeddingPlannerUI2 from "./components/WeddingPlannerUI2";
import companyIcon from "./images/topImage.png";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(0); // 0: WeddingPlannerUI, 1: WeddingPlannerUI2

  const components = [<WeddingPlannerUI key="UI1" />, <WeddingPlannerUI2 key="UI2" />];

  const handleNavigation = (direction) => {
    setCurrentComponent((prev) =>
      direction === "next" ? (prev + 1) % components.length : (prev - 1 + components.length) % components.length
    );
  };

  return (
    <div className="app">
      <div  className="company-logo">
        <img src={companyIcon} alt="Company Logo" />
      </div>

      {/* Render the current component */}
      <div className="component-container">{components[currentComponent]}</div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => handleNavigation("prev")}>
          Previous
        </button>
        <button className="nav-button" onClick={() => handleNavigation("next")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
