import { ErrorMessage, Field } from "formik";

const FormEmail = () => {
  return (
    <div className="formik__input-box">
      <label htmlFor="email">Email:</label>
      <Field type="email" name="email" placeholder="email" />
      <ErrorMessage className="error" name="email" component="div" />
    </div>
  );
};

export default FormEmail;
