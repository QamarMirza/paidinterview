import { combineReducers } from 'redux';
import { SelectFiltertReducer } from './reducers/filter-reducer'
import { SelectSortReducer } from './reducers/sort-reducer'

export const intialState = {
  selectFilter: null,
  selectSort: null,
};

export const rootReducer = combineReducers({
  selectFilter: SelectFiltertReducer,
  selectSort: SelectSortReducer,
});