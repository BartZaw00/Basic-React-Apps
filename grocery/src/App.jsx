import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <div className="container-input">
        <form className="form-element">
          <input type="text" placeholder="e.g. Milk" />
          <button type="submit">Submit</button>
        </form>
        <ul></ul>
        <div className="clear-button display-none">
          Clear Items
        </div>
      </div>
    </div>
  );
}

export default App;
