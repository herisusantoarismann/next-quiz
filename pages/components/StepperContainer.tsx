import React from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface Props {
  steps: number;
  activeStep: number;
}

const StepperContainer = ({ steps, activeStep }: Props) => {
  const renderSteps = () => {
    let stepsComponents = [];
    for (let i = 0; i < steps; i++) {
      stepsComponents.push(
        <Step key={i}>
          <StepLabel></StepLabel>
        </Step>
      );
    }

    return stepsComponents;
  };

  return (
    <Stepper
      activeStep={activeStep}
      sx={{ width: { sm: "75%", lg: "50%" }, margin: "0 auto" }}
    >
      {renderSteps()}
    </Stepper>
  );
};

export default StepperContainer;
