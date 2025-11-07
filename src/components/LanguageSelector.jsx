import React, { useState } from "react";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("eng");
  return (
    <div>
      <h1>Language</h1>

      <select  value={language} onChange={(e)=>setLanguage(e.target.value)}>
        <option value="English">English</option>
        <option value="Urdu">Urdu</option>
        <option value="Math">Math</option>
      </select>

      <h1>{language}</h1>
    </div>
  );
};

export default LanguageSelector;
