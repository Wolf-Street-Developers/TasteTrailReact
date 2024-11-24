import React, { useState, useEffect } from "react";
import "./VenueForm.css";
import MapChoose from "../MapChoose/MapChoose";

const VenueForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    email: "",
    contactNumber: "",
    averagePrice: 0,
    longtitude: 0,
    latitude: 0,
    logoUrlPath: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMapChange = (res) => {
    const { lat, lng } = res;
    setFormData({ ...formData, latitude: lat, longtitude: lng });
    console.log(formData)
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      address: "",
      description: "",
      email: "",
      contactNumber: "",
      averagePrice: 0,
      longtitude: 0,
      latitude: 0,
      logoUrlPath: ""
    });
  };

  return (
    <form className="venue-form" onSubmit={handleSubmit}>
      
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
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

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Contact Number:
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Average Price:
        <input
          type="number"
          name="averagePrice"
          value={formData.averagePrice}
          onChange={handleChange}
          required
        />
      </label>

      <MapChoose handleChange={handleMapChange}/>

      <button type="submit">{initialData ? "Save Changes" : "Submit"}</button>
    </form>
  );
};

export default VenueForm;


