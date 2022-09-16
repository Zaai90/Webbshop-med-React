import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { SwishModel } from "../../../models/SwishModel";

interface Props {
  handleSubmit: () => void;
  handleFormValue: (value: SwishModel) => void;
}
type YupObject = Record<keyof SwishModel, yup.AnySchema>;

const validationSchema = yup.object<YupObject>({
  phoneNumber: yup
    .string()
    .matches(/^\+?[0-9]\d{1,13}$/)
    .min(10, "Phone number must be atleast 10 figures")
    .max(13, "Phone number must be  max 13 figures")
    .required(),
});

const Swish = ({ handleSubmit, handleFormValue }: Props) => {
  const formik = useFormik({
    initialValues: { phoneNumber: "" },
    validationSchema: validationSchema,
    onSubmit: (value: SwishModel, e) => {
      handleFormValue(value);
      handleSubmit();
    },
  });

  return (
    <form id="payment-form" onSubmit={formik.handleSubmit}>
      <TextField
        id="phoneNumber"
        name="phoneNumber"
        label="Phone number"
        type="tel"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
      />
    </form>
  );
};

export default Swish;
