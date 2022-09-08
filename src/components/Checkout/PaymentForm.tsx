import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import styled from "styled-components";
import * as yup from "yup";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 2rem;
  width: 90%;
`;

const Input = styled(TextField)`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  firstName: yup.string().min(2, "First name should be of minimum 2 characters length").required("First name is required"),
  lastName: yup.string().min(2, "Last name should be of minimum 2 characters length").required("Last name is required"),
  address: yup.string().min(2, "Address should be of minimum 2 characters length").required("Address is required"),
  zipCode: yup.string().min(5, "Password should be of minimum 5 characters length").required("Zip Code is required"),
  country: yup.string().min(2, "Password should be of minimum 2 characters length").required("Country is required"),
  phoneNumber: yup.string().min(5, "Password should be of minimum 5 characters length").required("Phone number is required"),
});

export interface Values {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
}

interface Props {
  handleSubmit: () => void;
  setFormValues: (values: Values) => void;
}

const PaymentForm = ({ handleSubmit, setFormValues }: Props) => {
  const formik = useFormik({
    initialValues: { email: "", firstName: "", lastName: "", address: "", zipCode: "", country: "", phoneNumber: "" },

    validationSchema: validationSchema,
    onSubmit: (values: Values, e) => {
      handleSubmit();
      setFormValues(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div>Personal information</div>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <Input
          fullWidth
          id="lastName"
          name="lastName"
          label="Last name"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <Input
          fullWidth
          id="address"
          name="address"
          label="address"
          type="text"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          fullWidth
          id="zipCode"
          name="zipCode"
          label="Zip code"
          type="text"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
          helperText={formik.touched.zipCode && formik.errors.zipCode}
        />
        <TextField
          fullWidth
          id="country"
          name="country"
          label="Country"
          type="text"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          label="PhoneNumber"
          type="text"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Next step
        </Button>
      </Form>
    </div>
  );
};

export default PaymentForm;
