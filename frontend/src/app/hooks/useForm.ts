import { useState, ChangeEvent } from "react";

export default function useForm<Type>(initialValues: Type) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => setValues(initialValues);

  return {
    values,
    handleChange,
    resetForm,
    setValues,
  };
}
