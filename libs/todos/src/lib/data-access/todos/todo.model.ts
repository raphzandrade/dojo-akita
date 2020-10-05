export interface Todo {
  id: number;
  title: string;
  message: string;
  done: boolean;
}

export function createTodo(params: Partial<Todo>) {
  return params as Todo;
}
