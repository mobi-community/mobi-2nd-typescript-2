import { TodoDataBase, TodoType, TodoEnum } from "@/types/todo";
import { useState } from "react";

type Props = {
  todo: TodoDataBase;
};

const OneTodo: React.FC<Props> = ({ todo }) => {
  // const [currentTodo, setCurrentTodo] = useState()

  // export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  //   TodoDataBase,
  //   { type: T }
  // >;

  // const isDailyTodo = (
  //   todo: TodoDataBase
  // ): todo is TodoType<TodoEnum.DAILY> => {
  //   return todo.type === "DAILY";
  // };

  // const isWeeklyTodo = (
  //   todo: TodoDataBase
  // ): todo is TodoType<TodoEnum.WEEKLY> => {
  //   return todo.type === "WEEKLY";
  // };

  // const isMonthlyTodo = (
  //   todo: TodoDataBase
  // ): todo is TodoType<TodoEnum.MONTHLY> => {
  //   return todo.type === "MONTHLY";
  // };

  const todoType = (todo: TodoDataBase) => {
    if (todo.type === TodoEnum.DAILY) {
      return {
        title: todo.title,
        content: todo.content,
      };
    }
    if (todo.type === TodoEnum.WEEKLY) {
      return {
        total: todo.total,
      };
    }
    if (todo.type === TodoEnum.MONTHLY) {
      return {
        goal: todo.goal,
      };
    }
  };

  return <div>{todoType(todo)?.goal}</div>;
};

export default OneTodo;
