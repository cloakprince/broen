import React from "react";
import '../index.css';

import left from '../assets/0cc010ac07122ed66c40624c6c16258b.jpg';
import right from '../assets/0cc010ac07122ed66c40624c6c16258b.jpg';

const Solutions: React.FC = () => {
  return (
    <div className="imgContainer">
        <img className="Solutions" src={left}/>
        <img className="Solutions" src={right}/>
    </div>
  );
};

export default Solutions;