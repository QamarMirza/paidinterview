import { SelectFiltertReducer } from './filter-reducer';
import { intialState } from '../root-reducer';

describe('Filter reducer tests', () => {

  it('should return initial state when no state is passed in', () => {
    const state = SelectFiltertReducer(intialState, { type: 'foo' });
    expect(state).toEqual(intialState);
  });

  it('should return updated filter', () => {
    const state = SelectFiltertReducer(intialState, { type: 'SELECT_FILTER', payload: 'test' });
    expect(state).toEqual('test');
  });
});
