import React from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filters from './Filters';

export default () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  )
}
