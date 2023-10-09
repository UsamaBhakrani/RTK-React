import { useState } from "react";
import { useDispatch } from "react-redux";
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
      <label id="todo">Add Todo</label>
      <input type="text" id="todo" onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddToDo;
