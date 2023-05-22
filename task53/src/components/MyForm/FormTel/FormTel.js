import { ErrorMessage, Field } from "formik";

const FormTel = () => {
  return (
    <div className="formik__input-box">
      <label htmlFor="tel">Phone:</label>
      <Field type="tel" name="tel" placeholder="380XXXXXXXXX" />
      <ErrorMessage className="error" name="tel" component="div" />
    </div>
  );
};

export default FormTel;
