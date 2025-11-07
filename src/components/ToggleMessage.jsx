// import React, { useState } from 'react'

// const ToggleMessage = () => {
//     const[showMessage,setShowMessage]=useState(false)
//     const toggleMessage=()=>{
//         setShowMessage(!showMessage)
//     }
//   return (
//     <div>ToggleMessage

// {showMessage&&<p>Shoing message </p>}
// <button onClick={toggleMessage}>Toggle Message</button>

//     </div>
//   )
// }

// export default ToggleMessage


import React, { useState } from "react";

function ToggleMessage() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  // ❌ Unsafe toggle — depends directly on stale value of `show`
  const toggleUnsafe = () => {
    setTimeout(() => {
      setShow(!show);
    }, 1000);
  };

  // ✅ Safe toggle — always uses the latest state
  const toggleSafe = () => {
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Safe vs Unsafe Toggle Example</h2>

      <p>Message is {show ? "Visible 👀" : "Hidden 🙈"}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increase Count ({count})</button>
      <br /><br />

      <button onClick={toggleUnsafe} style={{ marginRight: "10px" }}>
        Toggle (Unsafe)
      </button>

      <button onClick={toggleSafe}>
        Toggle (Safe)
      </button>
    </div>
  );
}

export default ToggleMessage;
