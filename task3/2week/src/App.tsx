import { useState } from "react";
import { TodoApi } from "./apis/1";
import Q1Component from "./question/q";
import { TodoDataBase } from "./types/todo";

function App() {
  const [todoList, setTodoList] = useState<TodoDataBase[]>();

  const getTodo = async () => {
    const todo = await TodoApi.getTodo();
    setTodoList(todo);
  };

  if (!todoList) return null;

  return <Q1Component todoList={todoList} />;
}

export default App;
