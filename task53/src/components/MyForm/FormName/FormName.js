import { ErrorMessage, Field } from "formik";

const FormName = () => {
  return (
    <div className="formik__input-box">
      <label htmlFor="name">Name:</label>
      <Field type="text" name="name" placeholder="Name" />
      <ErrorMessage className="error" name="name" component="div" />
    </div>
  );
};

export default FormName;
