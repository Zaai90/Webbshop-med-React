import { Step, StepLabel, Stepper, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { useLocalStorage } from "../../hooks/localStorage";
import { CreditCardModel } from "../../models/CreditCardModel";
import { OrderModel } from "../../models/OrderModel";
import { SwishModel } from "../../models/SwishModel";
import OrderConfirmation from "../../pages/OrderConfirmation";
import theme from "../../utils/Theme";
import Confirmation from "./Confirmation";
import CurrentOrder from "./CurrentOrder";
import PaymentForm, { PaymentFormValues } from "./PaymentForm";
import PaymentOptions from "./PaymentOptions";

const steps = ["Personal information", "Payment selection", "Confirm"];

const PaymentProcess = () => {
  const { cart, clearCart } = useCart();
  const [currentOrder, setCurrentOrder] = useState<OrderModel>({} as OrderModel);
  const [activeStep, setActiveStep] = useState(0);
  const [swishValues, setSwishValues] = useState<SwishModel>({} as SwishModel);
  const [creditValues, setCreditValues] = useState<CreditCardModel>({} as CreditCardModel);
  const [orders, setOrders] = useLocalStorage<OrderModel[]>("orders", []);
  const [formValues, setFormValues] = useState<PaymentFormValues>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    phoneNumber: "",
  });
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 2) {
      handleOrder();
      clearCart();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function handleFormValues(values: PaymentFormValues) {
    setFormValues(values);
  }

  function handleCreditCardFormValues(values: CreditCardModel) {
    setCreditValues(values);
  }

  function handleSwishFormValues(values: SwishModel) {
    setSwishValues(values);
  }

  function handleOrder() {
    const newOrder: OrderModel = {
      orderId: orders.length + 1,
      paymentFormInfo: formValues,
      cartItems: cart,
      swishInfo: swishValues,
      creditInfo: creditValues,
    };

    setCurrentOrder(newOrder);
    addOrderToLocalStorage(newOrder);
  }
  function addOrderToLocalStorage(order: OrderModel) {
    console.log(order);
    setOrders((prevState) => [...prevState, order]);
  }

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ marginTop: "2rem" }}>
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
          <>
            <OrderConfirmation orders={orders} />
          </>
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
            {activeStep === 1 && (
              <PaymentOptions
                handleSubmit={handleNext}
                handleSwishFormValues={handleSwishFormValues}
                handleCreditCardFormValues={handleCreditCardFormValues}
              />
            )}
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
