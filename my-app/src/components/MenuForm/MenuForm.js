import React, { useState, useEffect } from "react";
import "./MenuForm.css";

const MenuForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      description: ""
    });
  };

  return (
    <form className="menu-form" onSubmit={handleSubmit}>
      <label>
        Menu Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">{initialData ? "Save Changes" : "Create Menu"}</button>
    </form>
  );
};

export default MenuForm;
