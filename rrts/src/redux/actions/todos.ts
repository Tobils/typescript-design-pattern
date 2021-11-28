import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./type";

const url: string = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface RemoveTodosAction {
  type: ActionTypes.removeTodos;
  payload: [];
}

export interface RemoveTodoAction {
  type: ActionTypes.removeTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const removeTodos = (): RemoveTodosAction => {
  return {
    type: ActionTypes.removeTodos,
    payload: [],
  };
};

export const removeTodo = (id: number): RemoveTodoAction => {
  return {
    type: ActionTypes.removeTodo,
    payload: id,
  };
};
