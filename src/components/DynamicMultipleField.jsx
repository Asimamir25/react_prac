import React, { useState } from "react";

const DynamicMultipleField = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: [""], // start with 1 input
  });

  // handle name & email
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle skill change by index
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...form.skills];
    updatedSkills[index] = value;

    setForm({
      ...form,
      skills: updatedSkills,
    });
  };

  // add new skill input
  const addSkill = () => {
    setForm({
      ...form,
      skills: [...form.skills, ""],
    });
  };

  const handleSubmit = () => {
    console.log("Final Data:", form);
  };

  return (
    <div>
      <h2>Dynamic Skills Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />
      <br />

      <h3>Skills</h3>
      {form.skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Skill ${index + 1}`}
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
        </div>
      ))}

      <button onClick={addSkill}>Add Skill</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DynamicMultipleField;
