import { Step, StepLabel, Stepper, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import OrderConfirmation from "../../pages/OrderConfirmation";
import theme from "../../utils/Theme";
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

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
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
          <Box
            sx={{
              marginTop: "3rem",
              display: smScreen ? "flex" : "grid",
              gridTemplateColumns: smScreen ? undefined : "2fr 3fr",
              flexDirection: smScreen ? "column-reverse" : undefined,
              gap: "1rem",
            }}
          >
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
