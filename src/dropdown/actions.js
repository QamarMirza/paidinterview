type Props = {
  type: string,
  selectedOption: any,
};

export const selectSort = (sort: Props) => (
  {
    type: `SELECT_${sort.type}`,
    payload: sort.selectedOption
  }
);