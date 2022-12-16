import React from "react";
import "./stepper.css";

const Stepper = () => {
  const steps = ["1", "2", "3", "4"];
  return (
    <div className="step-container">
      {steps?.map((step, i) => (
        <div key={i} className="step-item">
          <div>{i + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
