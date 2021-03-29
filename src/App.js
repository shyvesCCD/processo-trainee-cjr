import { useState, useRef } from "react";
import "./App.css";
import xImg from "./assets/letra-x.png";

const App = () => {
  const [list, setList] = useState([]);

  const input = useRef(null);

  const handleSubmit = () => {
    if (input.current.value === "") {
      alert("Não entre com valor vazio");
    } else {
      setList([...list, input.current.value]);
      input.current.value = "";
    }
  };

  const handleDelete = (todo) => {
    const newBlogs = list.filter((element) => element !== todo);
    setList(newBlogs);
  };

  return (
    <div className="App">
      <h1>TodoList Trainee</h1>
      {/* <div className="header">
        <button>Feitos</button>
        <button>Fazendo</button>
      </div> */}
      <div className="main">
        <input ref={input} type="text" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ul>
        <form>
          {list.map((todo) => (
            <>
              <li>
                <input type="checkbox" id={list.indexOf(todo)} />
                <label htmlFor={list.indexOf(todo)}>{todo}</label>
                <button onClick={() => handleDelete(todo)} type="button">
                  <img src={xImg} alt="Deletar o Todo" />
                </button>
              </li>
            </>
          ))}
        </form>
      </ul>
    </div>
  );
};

export default App;
