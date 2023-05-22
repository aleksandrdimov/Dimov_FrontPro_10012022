import { Formik, Form } from "formik";
import { FormName, FormTel, FormEmail, FormButton } from "./index";
import { validateName, validateEmail, validateTel } from "../Validate/Validate";
import "./MyForm.css";

const MyForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const handleValidateAll = (values) => {
    const errors = {};
    validateName(values, errors);
    validateEmail(values, errors);
    validateTel(values, errors);
    return errors;
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", tel: "" }}
      validate={handleValidateAll}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="formik__form">
          <FormName />
          <FormEmail />
          <FormTel />
          <FormButton isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
