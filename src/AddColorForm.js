import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddColorForm({ addColor }) {
    const INITIAL_STATE = { color: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();

    const handleChange = event => {
      const { name, value } = event.target;
      // set new state for form data
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    };

    const handleSubmit = event => {
      event.preventDefault();
      console.log(formData);
      addColor(formData.color);
      history.push('/colors');
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">add color:</label>
        <input id="color" name="color"
          value={formData.color} onChange={handleChange} />
        <button>submit</button>
      </form>
    );
  }

export default AddColorForm;