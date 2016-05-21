import React from 'react';
import Link from './Link';
import { setVisibilityFilter } from '../actions/actions';

export default function FilterLink({ dispatch, filter, visibilityFilter, children }) {
  return (
    <Link active={visibilityFilter === filter} onClick={()=> {return dispatch(setVisibilityFilter(filter))}}>
      {children}
    </Link>
  );
}
