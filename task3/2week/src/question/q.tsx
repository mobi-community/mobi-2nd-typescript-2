import OneTodo from "./components/one-todo";
import { TodoDataBase } from "@/types/todo";

type Props = {
  todoList: TodoDataBase[];
};

const Q1Component: React.FC<Props> = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo, index) => (
        <OneTodo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Q1Component;
