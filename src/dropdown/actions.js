export const selectSort = (sort) => (
  {
    type: `SELECT_${sort.type}`,
    payload: sort.selectedOption.label
  }
);