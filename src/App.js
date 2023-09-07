
import { useState,useEffect } from "react";
import Todo from "./components/Todo";
import {
  getAllToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} from "./components/utils/handleApi";

function App() {
  const [ToDo,setToDo]=useState([])
  const [text, setText] = useState("");
  const [isUpdating,setIsUpdating]=useState(false)
   const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
   
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Home work App</h1>
        <div className="top">
          <input
            type="texte"
            placeholder="Add Home work...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="liste"></div>
        {ToDo.map((item) => (
          <Todo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={()=>deleteToDo(item._id,setToDo)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
