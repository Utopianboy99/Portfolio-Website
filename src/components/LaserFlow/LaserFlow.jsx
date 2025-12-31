import React from "react";
import "./LaserFlow.css";

function LaserFlow() {
  return (
    <div className="laser-flow-container">
      <div className="laser-beam laser-1"></div>
      <div className="laser-beam laser-2"></div>
      <div className="laser-beam laser-3"></div>
      <div className="laser-beam laser-4"></div>
      <div className="laser-core"></div>
    </div>
  );
}

export default LaserFlow;
