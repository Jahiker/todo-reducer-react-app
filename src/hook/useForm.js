import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [isValid, setIsValid] = useState(true);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });

    if (target.value) {
      setIsValid(true);
      target.setCustomValidity("");
    } else {
      target.setCustomValidity(`${target.dataset.error}`);
      setIsValid(false);
    }
  };

  const onResetForm = () => setFormState(initialForm);

  return { ...formState, formState, onInputChange, onResetForm, isValid };
};
