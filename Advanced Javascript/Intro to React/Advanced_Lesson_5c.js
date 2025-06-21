// ========================================
// Module 5: Intro to React
// ========================================
// - What is React? (component-based UI)
// - JSX syntax rules
// - useState and useEffect introduction
// - Functional vs Class components (brief)
// - Project: Simple Counter App / Emoji Picker



import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}



useEffect(() => {
  console.log("Component mounted or updated");
}, []);
