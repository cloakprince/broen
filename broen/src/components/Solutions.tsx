import React from "react";
import '../index.css';

import left from '../assets/Screenshot 2024-08-31 204632.png';
import right from '../assets/Screenshot 2024-08-31 204748.png';

const Solutions: React.FC = () => {
  return (
    <div className="imgContainer">
        <img className="Solutions" src={left}/>
        <img className="Solutions" src={right}/>
    </div>
  );
};

export default Solutions;