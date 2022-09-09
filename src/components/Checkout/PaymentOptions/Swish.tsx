import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export interface SwishModel {
  phoneNumber: string;
}
interface Props {
  handleSubmit: () => void;
  handleFormValue: (value: SwishModel) => void;
}
type YupObject = Record<keyof SwishModel, yup.AnySchema>;

const validationSchema = yup.object<YupObject>({
  phoneNumber: yup.string().matches(/^\d+$/).min(9, "Phone number must be 10 figures").max(10, "Phone number must be 10 figures").required(),
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
