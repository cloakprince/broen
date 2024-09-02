import React from "react";
import '../index.css';

import welcomeimg from '../assets/wallhaven-6drk3w.png';

const Welcome: React.FC = () => {
  return (
    <div className="imgContainer">
      <img className="welcomeimg" src={welcomeimg}/>
      <div className="text-overlay">Welcome to BROEN-LAB</div>
    </div>
  );
};

export default Welcome;