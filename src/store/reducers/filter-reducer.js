import { intialState } from '../root-reducer';

export const SelectFiltertReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SELECT_FILTER':
      return action.payload;
    default:
      return state
  }
};

