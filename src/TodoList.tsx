import React from 'react';
import {Todo, ToggleTodo} from './models/todo.d';
import {TodoListItem} from './TodoListItem';

export interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}
export const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
