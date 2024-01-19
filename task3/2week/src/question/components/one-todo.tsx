import { TodoDataBase, TodoType, TodoEnum } from "@/types/todo";

type Props = {
  todo: TodoDataBase;
};

const OneTodo: React.FC<Props> = () => {
  let todoData: any = {
    type: TodoEnum.DAILY,
    content: "aa",
    title: "aa",
  };

  // const isDailyTodo = (
  //   todo: TodoDataBase
  // ): todo is TodoType<TodoEnum.DAILY> => {
  //   return todo.type === TodoEnum.DAILY;
  // };

  // const isWeeklyTodo = (
  //   todo: TodoDataBase
  // ): todo is TodoType<TodoEnum.WEEKLY> => {
  //   return todo.type === TodoEnum.WEEKLY;
  // };

  // const isMonthlyTodo = (
  //   todo: TodoDataBase
  // ): todo is TodoType<TodoEnum.MONTHLY> => {
  //   return todo.type === TodoEnum.MONTHLY;
  // };

  // //타입을 바꿔주는 함수
  // isDailyTodo(todoData);
  // isWeeklyTodo(todoData);
  // isMonthlyTodo(todoData);

  const isTodoType = <T extends TodoEnum>(
    todo: TodoDataBase,
    targetType: T
  ): todo is TodoType<T> => {
    return todo.type === targetType;
  };

  Object.values(TodoEnum).forEach((key) => {
    if (isTodoType<typeof key>(todoData, todoData.type)) {
      return todoData;
    }
  });

  //   export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  //   TodoDataBase,
  //   { type: T }
  // >;

  // const getTodo = (todo: TodoDataBase) => {
  //   if (todo.type === TodoEnum.DAILY) {
  //     return {
  //       type: todo.type,
  //       title: todo.title,
  //       content: todo.content,
  //     };
  //   }
  //   if (todo.type === TodoEnum.WEEKLY) {
  //     return {
  //       type: todo.type,
  //       total: todo.total,
  //     };
  //   }
  //   if (todo.type === TodoEnum.MONTHLY) {
  //     return {
  //       type: todo.type,
  //       goal: todo.goal,
  //     };
  //   }
  // };

  return <>{/* <div>{getTodo(todo)?.goal}</div> */}</>;
};

export default OneTodo;
