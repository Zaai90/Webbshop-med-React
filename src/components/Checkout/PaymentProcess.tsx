import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { CreditCardModel } from "../../models/CreditCardModel";
import Confirmation from "./Confirmation";
import CurrentOrder from "./CurrentOrder";
import PaymentForm from "./PaymentForm";
import PaymentOptions from "./PaymentOptions";

const steps = ["Personal information", "Payment selection", "Confirm"];

interface Props {
  handleFormValues: (values: CreditCardModel) => void;
}

const PaymentProcess = ({handleFormValues}: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


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
      {/* This happens after final step */}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Thank you for your purchase!</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>{/* TODO: Add Complete component */}</Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {activeStep === 0 && <PaymentForm handleSubmit={handleNext} />}
            {activeStep === 1 && <PaymentOptions handleFormValues={handleFormValues} handleSubmit={handleNext} />}
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
