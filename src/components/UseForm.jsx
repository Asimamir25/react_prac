import React, { useState } from "react";

const UseForm = () => {
  const [form, setForm] = useState({ name: "", email: "", country: "" });
  const handleChange = (e) => {
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(form.name);
  };
  return (
    <div>
      <h1>UseForm</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          value={form.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          value={form.country}
          name="country"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <h1>{form.name}</h1>
        <h1>{form.email}</h1>
        <h1>{form.country}</h1>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UseForm;
