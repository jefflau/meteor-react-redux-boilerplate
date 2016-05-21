import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';

function Filters(props){
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter='SHOW_ALL' {...props}>
        All
      </FilterLink>
      {', '}
      <FilterLink filter='SHOW_ACTIVE' {...props}>
        Active
      </FilterLink>
      {', '}
      <FilterLink filter='SHOW_COMPLETED' {...props}>
        Completed
      </FilterLink>
    </p>
  );
}

function mapStateToProps(state){
  return {
    visibililityFilter: state.visibililityFilter
  }
}

export default connect(mapStateToProps)(Filters);