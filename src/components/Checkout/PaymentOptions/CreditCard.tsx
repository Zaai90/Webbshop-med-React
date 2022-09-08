import { TextField } from "@mui/material";
import { useFormik } from "formik";
import styled from "styled-components";
import * as yup from "yup";
import { CreditCardModel } from "../../../models/CreditCardModel";

interface Props {
  handleFormValues: (values: CreditCardModel) => void;
}

type YupObject = Record<keyof CreditCardModel, yup.AnySchema>;

const today = new Date();
today.setHours(0, 0, 0, 0);

const validationSchema = yup.object<YupObject>({
  cardNumber: yup.number().min(8, "Card number must have at least 8 digits").required("Card number is required"),
  expirationDate: yup.date().min(today, "Expiration date cannot be in the past").required("Expiration date is required."),
  cardholderName: yup.string().min(4, "Cardholder Name must have 4 characters").required("Cardholder name is required."),
  cvcCode: yup.number().min(100, "CVC code must be 3 digits.").max(999, "CVC code must be 3 digits.").required("CVC Code is required."),
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  width: 100%;
`;

const Input = styled(TextField)`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const CreditCard = ({ handleFormValues }: Props) => {
  const formik = useFormik({
    initialValues: { cardNumber: 123456789, expirationDate: today, cardholderName: "", cvcCode: 123 },

    validationSchema: validationSchema,
    onSubmit: (values: CreditCardModel, e) => {
      handleFormValues(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form id="my-form" onSubmit={formik.handleSubmit}>
      <Input
        fullWidth
        id="cardNumber"
        name="cardNumber"
        label="Card Number"
        type="text"
        value={formik.values.cardNumber}
        onChange={formik.handleChange}
        error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
        helperText={formik.touched.cardNumber && formik.errors.cardNumber}
      />
      <Input
        fullWidth
        id="expirationDate"
        name="expirationDate"
        label="Expiration Date"
        type="text"
        value={formik.values.expirationDate}
        onChange={formik.handleChange}
        error={formik.touched.expirationDate && Boolean(formik.errors.expirationDate)}
      />
      <Input
        fullWidth
        id="cardholderName"
        name="cardholderName"
        label="Cardholder Name"
        type="text"
        value={formik.values.cardholderName}
        onChange={formik.handleChange}
        error={formik.touched.cardholderName && Boolean(formik.errors.cardholderName)}
        helperText={formik.touched.cardholderName && formik.errors.cardholderName}
      />
      <Input
        fullWidth
        id="cvcCode"
        name="cvcCode"
        label="CVC Code"
        type="text"
        value={formik.values.cvcCode}
        onChange={formik.handleChange}
        error={formik.touched.cvcCode && Boolean(formik.errors.cvcCode)}
        helperText={formik.touched.cvcCode && formik.errors.cvcCode}
      />
    </Form>
  );
};

export default CreditCard;
