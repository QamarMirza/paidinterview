import { intialState } from '../root-reducer';

export const SelectFiltertReducer = (state: any = intialState, action: any) => {
  switch (action.type) {
    case 'SELECT_FILTER':
      return action.payload;
    default:
      return state
  }
};

