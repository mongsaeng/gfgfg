import { useState } from "react";
// 7-1 Array : To Do List
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); // 배열 안에 Element를 추가 "..."
  }
  return(
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text" placeholder="Write your to do..." />
          <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default App;