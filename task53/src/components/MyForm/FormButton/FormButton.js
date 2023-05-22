const FormButton = ({ isSubmitting }) => {
  return (
    <button className="formik__button" type="submit" disabled={isSubmitting}>
      Submit
    </button>
  );
};

export default FormButton;
