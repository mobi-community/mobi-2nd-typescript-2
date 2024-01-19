import axios from "axios";
import { TodoType } from "@/types/todo";

export const TodoApi = {
  async getTodo() {
    const res = await axios.get<TodoType[]>("/");
    return res.data;
  },
};
