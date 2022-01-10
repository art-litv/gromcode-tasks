import { useState, useEffect } from "react";

export default function useForm(defaultFormData, onSubmit) {
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    setFormData(defaultFormData);
  }, [defaultFormData]);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return [
    formData,
    {
      setFormData,
      handleChange,
      handleSubmit,
    },
  ];
}
