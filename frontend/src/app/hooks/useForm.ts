import { useState, ChangeEvent } from "react";

export default function useForm(initialValues: Record<string, string>) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  };
}
