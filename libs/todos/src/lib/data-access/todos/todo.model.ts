export interface Todo {
  id: number | string;
  title: string;
  message: string;
}

export function createTodo(params: Partial<Todo>) {
  return params as Todo;
}
