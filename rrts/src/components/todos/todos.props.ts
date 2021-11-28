import { removeTodo, removeTodos, Todo } from "../../redux/actions";

export interface TodosProps {
  todos: Todo[];
  fetchTodos: Function;
  removeTodos: typeof removeTodos;
  removeTodo: typeof removeTodo;
}
