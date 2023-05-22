import "./Modal.css";
import MyForm from "../MyForm/MyForm";

const Modal = () => {
  return (
    <div className="modal">
      <h1 className="modal__title"> My form Formik</h1>
      <MyForm />
    </div>
  );
};

export default Modal;
