// import React, { useState, useMemo } from "react";

// // ✅ Correct debounce function
// function debounce(func, delay) {
//   let timeoutId;
//   return (...args) => {
//     if (timeoutId) clearTimeout(timeoutId); // not clearInterval
//     timeoutId = setTimeout(() => func(...args), delay);
//   };
// }

// const App = () => {
//   const items = ["apple", "banana", "grapes", "orange", "mango", "pear"];
//   const [query, setQuery] = useState("");
//   const [filtered, setFiltered] = useState(items);

//   const filteredSearch = (value) => {
//     const filter = items.filter((item) =>
//       item.toLowerCase().includes(value.toLowerCase())
//     );
//     setFiltered(filter);
//   };

//   // ✅ Create debounced version once
//   const debouncedSearch = useMemo(() => debounce(filteredSearch, 500), []);

//   const handleInput = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     debouncedSearch(value); // ✅ call debounced function
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <input
//         type="text"
//         value={query}
//         onChange={handleInput}
//         placeholder="Search fruits..."
//       />

//       <ul>
//         {filtered.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import NameInput from "./components/NameInput";
import LanguageSelector from "./components/LanguageSelector";
import ToggleMessage from "./components/ToggleMessage";
import FruitList from "./components/FruitList";
import UseEffectDemo from "./components/useEffectDemo";
import FetchUser from "./components/FetchUser";
import UseForm from "./components/UseForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      {/* <Welcome name="asim" goal="to master React" />
<Counter/>
<NameInput/>
<LanguageSelector/> */}
      {/* <ToggleMessage/> */}
      {/* <FruitList/> */}
      {/* <UseEffectDemo/>
<FetchUser/> */}
      {/* <UseForm/> */}
      <TodoList />
    </>
  );
};

export default App;
