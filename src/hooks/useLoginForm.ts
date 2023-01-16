import { useEffect, useState } from "react";
import { errorAlert } from "../utils/utils";

const useLoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [disabledForm, setDisabledForm] = useState(true);

  useEffect(() => {
    if (!formValues.username.trim() || !formValues.password.trim()) {
      setDisabledForm(true);
    } else {
      setDisabledForm(false);
    }
  }, [formValues]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidLogin()) {
      localStorage.setItem("logged", JSON.stringify(formValues));
      window.location.reload();
      return;
    }
    errorAlert("Credenciales invalidas");
  };

  const isValidLogin = () => {
    if (formValues.username === "Admin" && formValues.password === "Admin") {
      return true;
    }

    return false;
  };

  return {
    formValues,
    disabledForm,
    handleChangeValue,
    handleLoginSubmit,
  };
};

export default useLoginForm;
