import { useState } from "react";
import "./App.css";

function App() {
  const [clearBtn, setClearBtn] = useState(false);
  const [listElement, setListElement] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listElement != "") {
      setClearBtn(true);
      const newItem = {
        id: new Date().getTime().toString(),
        title: listElement,
      };
      setList([...list, newItem]);
      setListElement("");
    }
  };

  const handleChange = (e) => {
    setListElement(e.target.value);
  };

  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <div className="container-input">
        <form className="form-element" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g. Milk"
            value={listElement}
            onChange={handleChange}
          />
          <button type="submit" className="list-button">
            Submit
          </button>
        </form>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
        {clearBtn ? (
          <div
            className="clear-button"
            onClick={() => {
              setList([]);
              setClearBtn(!clearBtn);
            }}
          >
            Clear Items
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
