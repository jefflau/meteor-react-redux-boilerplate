import Todos from '../imports/collections';

Meteor.methods({
  addTodo(text) {
    return Todos.insert({text, completed: false})
  },
  toggleTodo(id) {
    let todo = Todos.findOne({_id: id}, {fields: { completed: true}});
    let completed = todo.completed;
    return Todos.update({_id: id}, {$set: {completed: !completed}});
  }
})