import "./App.css";
import { useState } from "react";
function App() {
  const [text, setText] = useState();

  return (
    <div className="mine">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(text);
        }}
      >
        <input
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
