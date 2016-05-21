export function addTodo(text){
  return () => {
    Meteor.call('addTodo', text)
  }
}

export function toggleTodo(id) {
  return () => {
    Meteor.call('toggleTodo', id);
  };
};

export function changePage(currentPageNumber) {
  return {
    type: 'CHANGE_PAGE',
    currentPageNumber
  };
};

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
}