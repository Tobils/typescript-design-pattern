import { FetchTodosAction, RemoveTodoAction, RemoveTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  removeTodos,
  removeTodo,
}

export type Action = FetchTodosAction | RemoveTodosAction | RemoveTodoAction;
