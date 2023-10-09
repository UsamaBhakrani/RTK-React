import React from "react";
import AddToDo from "./components/AddToDo";
import ToDo from "./components/todo";

const App = () => {
  return (
    <div style={{ display: "grid" }}>
      <AddToDo />
      <div>
        <ToDo />
      </div>
    </div>
  );
};

export default App;
