import { Formik, Form } from "formik";
import { FormButton, FormInput } from "./index";
import { validateName, validateEmail, validateTel } from "../Validate/Validate";
import "./MyForm.css";

const MyForm = () => {
  const typeInput = [
    { name: "name", type: "text" },
    { name: "email", type: "email" },
    { name: "tel", type: "tel" },
  ];

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
          {typeInput.map((input) => (
            <FormInput type={input.type} name={input.name} />
          ))}
          <FormButton isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
