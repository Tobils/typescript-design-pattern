import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

/**
 * define the structure of object
 */
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res: any) => {
  console.log(res.data);
  const todo = res.data as Todo; /** help us to figure out object */

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(todo);
});

const logTodo = (todo: Todo) => {
  console.log(`
  The To Do : ${todo.id}
  Has title : ${todo.title}
  Has Finished: ${todo.completed}
  `);
};
