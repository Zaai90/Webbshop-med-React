import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import OrderConfirmation from "../../pages/OrderConfirmation";
import Confirmation from "./Confirmation";
import CurrentOrder from "./CurrentOrder";
import PaymentForm, { Values } from "./PaymentForm";
import PaymentOptions from "./PaymentOptions";

const steps = ["Personal information", "Payment selection", "Confirm"];

const PaymentProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState<Values>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function handleFormValues(values: Values) {
    setFormValues(values);
    console.log(values);
  }

  return (
    <Box sx={{ width: "100%", marginTop: "10rem" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <OrderConfirmation email={formValues.email} name={formValues.firstName} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {activeStep === 0 && <PaymentForm handleSubmit={handleNext} setFormValues={handleFormValues} />}
            {activeStep === 1 && <PaymentOptions handleSubmit={handleNext} />}
            {activeStep === 2 && <Confirmation handleSubmit={handleNext} />}
            <CurrentOrder />
          </Box>
          {activeStep !== 0 && (
            <Box sx={{ pt: 2 }}>
              <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            </Box>
          )}
        </React.Fragment>
      )}
    </Box>
  );
};

export default PaymentProcess;
