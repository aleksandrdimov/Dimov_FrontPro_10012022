import { ErrorMessage, Field } from "formik";
import React from "react";

const FormInput = ({ type, name }) => {
  return (
    <div className="formik__input-box">
      <label htmlFor={type}>{name}:</label>
      {type === "tel" ? (
        <Field type={type} name={name} placeholder="38XXXXXXXXXX" />
      ) : (
        <Field type={type} name={name} placeholder={name} />
      )}
      <ErrorMessage className="error" name={name} component="div" />
    </div>
  );
};

export default FormInput;
