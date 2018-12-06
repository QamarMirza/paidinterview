import { intialState } from '../root-reducer';

export const SelectSortReducer = (state: any = intialState, action: any) => {
  switch (action.type) {
    case 'SELECT_SORT':
      return action.payload;
    default:
      return state
  }
};

