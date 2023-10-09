import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../slices/todoSlice";
import { AiFillDelete } from "react-icons/ai";

const ToDo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todos.map((to) => (
          <li key={to.id}>
            {to.text}
            <AiFillDelete onClick={() => dispatch(removeTodo(to.id))} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
