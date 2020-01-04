/**
   * root reducer : combine all reduces (todos, filter, search)
   */

import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import search from './search'

export default combineReducers({
  todos,
  filter,
  search
})