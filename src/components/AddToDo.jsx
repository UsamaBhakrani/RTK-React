import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todo" id="todo">
        Add Todo
      </label>
      <input type="text" id="todo" onChange={(e) => setInput(e.target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default AddToDo;
