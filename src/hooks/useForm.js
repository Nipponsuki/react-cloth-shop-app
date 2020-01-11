import { useState } from "react";

export const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const updateForm = values => {
    setForm(state => {
      return {
        ...state,
        ...values
      };
    });
  };

  const handleInputChange = object => {
    if (object.persist) {
      object.persist();
    }
    const element = object.target ? object.target : object;

    setForm(state => ({
      ...state,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value
    }));
  };

  const clearInputs = () => setForm(initialValues);

  return {
    form,
    setForm,
    updateForm,
    handleInputChange,
    clearInputs
  };
};
