import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [form, setForm] = useState({ name: "", color: "#000000" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(form); // Add new color to the list
    navigate("/colors"); // Redirect to color list
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name: </label>
          <input
            name="name"
            placeholder="Enter color name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="color">Color Value: </label>
          <input
            type="color"
            name="color"
            value={form.color}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
