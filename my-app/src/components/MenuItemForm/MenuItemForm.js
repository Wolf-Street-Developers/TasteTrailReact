import React, { useState, useEffect } from "react";
import "./MenuItemForm.css";

const MenuItemForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0
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
    const updatedFormData = {
      ...formData,
      price: formData.price.toString().replaceAll(",", "."),
    };
    onSubmit(updatedFormData);
    setFormData({
      name: "",
      description: "",
      price: 0
    });
  };

  return (
    <form className="menu-item-form" onSubmit={handleSubmit}>
      <label>
        Item Name:
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
          maxLength={500}
          required
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
      </label>

      <button type="submit">{initialData ? "Save Changes" : "Add Item"}</button>
    </form>
  );
};

export default MenuItemForm;
