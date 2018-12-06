import { selectSort } from './actions';

describe('dropdown actions tests', () => {
  it('should create the correct dropdown action', () => {
    expect(selectSort({ type: 'TEST', selectedOption: null })).toEqual({ type: 'SELECT_TEST', payload: null });
  });
});
