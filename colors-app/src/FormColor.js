import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function FormColor({ addColor }) {
  const INITIAL_STATE = { name: "", hex: "" };
  const [form, setForm] = useState(INITIAL_STATE);
  // we have to declare useNavigate inside main component, not inside function of its.
  const navigate = useNavigate();

  function handleChange(e) {
    //e.persist();
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    //this one will nabigate to the /colors route and re-render the component associated with that route will be rendered.
    // thus, ColorList component will be re-render and added a new color.
    navigate("/colors");
    setForm(INITIAL_STATE);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color name</label>
      <input
        id="name"
        name="name"
        placeholder="Enter color name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="hex">Color value</label>
      <input
        id="hex"
        type="color"
        name="hex"
        value={form.hex}
        onChange={handleChange}
      />
      <button>ADD THIS COLOR</button>
    </form>
  );
}
export default FormColor;
