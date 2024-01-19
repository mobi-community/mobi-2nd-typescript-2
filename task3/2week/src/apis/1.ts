import { TodoDataBase } from "@/types/todo";
import axios from "axios";

export const TodoApi = {
  async getTodo() {
    const res = await axios.get<TodoDataBase[]>("/");
    return res.data;
  },
};
