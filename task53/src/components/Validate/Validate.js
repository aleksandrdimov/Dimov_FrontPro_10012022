const validateName = (values, errors) => {
  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[A-z\s]+$/.test(values.name)) {
    errors.name = "Invalid name. Only latin letters";
  }
};

const validateEmail = (values, errors) => {
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
};

const validateTel = (values, errors) => {
  if (!values.tel) {
    errors.tel = "Required";
  } else if (!/^[0-9]{12}$/.test(values.tel)) {
    errors.tel = "Invalid phone. Need 12 numbers";
  }
};

export { validateName, validateEmail, validateTel };
