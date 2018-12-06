import { connect } from 'react-redux'
import { selectSort } from './actions'
import { SearchDropDown } from './component';

const mapStateToProps = (state) => {
  return {
    selectSort: state.selectSort
  };
}

const mapDispatchToProps = {
  selectSortAction: selectSort,
};

export const SearchDropDownContainer = connect(mapStateToProps, mapDispatchToProps)(SearchDropDown);