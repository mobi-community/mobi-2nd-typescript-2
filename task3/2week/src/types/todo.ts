export enum TodoEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}
// todo가 3개 다 될 수 있는 상황
export type TodoDataBase =
  | {
      type: TodoEnum.DAILY;
      content: string;
      title: string;
    }
  | {
      type: TodoEnum.WEEKLY;
      total: Date;
    }
  | {
      type: TodoEnum.MONTHLY;
      goal: string;
    };

export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  TodoDataBase,
  { type: T }
>;

// interface DailyTodo {
//   type: TodoEnum.DAILY;
//   content: string;
//   title: string;
// }
// interface WeeklyTodo {
//   type: TodoEnum.WEEKLY;
//   total: Date;
// }

// interface MonthlyTodo {
//   type: TodoEnum.MONTHLY;
//   goal: string;
// }
