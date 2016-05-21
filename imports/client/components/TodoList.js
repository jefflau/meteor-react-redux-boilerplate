import React from 'react';
import { Meteor } from 'meteor/meteor';

import { connect }  from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import Todos from '../../collections';
import { changePage, toggleTodo } from '../actions/actions';
import Todo from './Todo';
import Pagination from './Pagination';

class TodoList extends React.Component {
  render() {
    const { dispatch, todos, todoCount } = this.props;

    let pagination = todoCount > 10 ? (
      <Pagination
        handlePageClick={(data)=> {return dispatch(changePage(data.selected))}}
        pageCount={todoCount/10}
      /> ) : '';

    return (
      <div>
        <ul>
          {todos.map(todo =>
            <Todo
              key={todo._id}
              {...todo}
              onClick={() => dispatch(toggleTodo(todo._id))}
            />
          )}
        </ul>
        {pagination}
      </div>
    )
  }
}

const TodoContainer = createContainer(({ visibilityFilter, pageSkip})=>{
  const todoSub = Meteor.subscribe('getTodos', visibilityFilter, pageSkip);

  return {
    todoSubReady: todoSub.ready(),
    todos: Todos.find({}, {limit:10}).fetch() || [],
    todoCount: Counts.get('TodoCount')
  }
}, TodoList);

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter,
    pageSkip: state.pageSkip
  }
}

export default connect(mapStateToProps)(TodoContainer);
