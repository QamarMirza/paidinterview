import { intialState } from '../root-reducer';

export const SelectSortReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SELECT_SORT':
      return action.payload;
    default:
      return state
  }
};

