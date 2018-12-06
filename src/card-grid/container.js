import { connect } from 'react-redux'
import { ImageGrid } from './component';

const mapStateToProps = (state) => {
  return {
    sortKeyword: state.selectSort,
    filterKeyword: state.selectFilter
  };
}


export const ImageGridContainer = connect(mapStateToProps, null)(ImageGrid);