import React, { Component } from 'react';
import { ImageCard } from '../card-component/component';
import { SearchDropDown } from '../dropdown';
export class ImageGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      names: [],
    }
  }

  fetchData(sortKeyword, filterKeyword) {
    let queryString = '?';
    if (sortKeyword && sortKeyword.trim()) {
      queryString += `sort=${sortKeyword}`
    }
    if (filterKeyword && filterKeyword.trim()) {
      if (queryString.length > 1) {
        queryString += '&';
      }
      queryString += `filter=${filterKeyword}`
    }
    fetch(`http://localhost:14330/api/values${queryString}`)
      .then(response => response.json())
      .then(data => this.setState({ data: data.content, names: data.names }))
      .catch(function (error) {
        console.log('Request failed', error)
      });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.sortKeyword !== prevProps.sortKeyword || this.props.filterKeyword !== prevProps.filterKeyword) {
      this.fetchData(this.props.sortKeyword, this.props.filterKeyword);
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { openModal } = this.props;
    console.log('filter, sort', this.props.filterKeyword, this.props.sortKeyword)

    const sortOptions = [
      { value: 1, label: 'Name' },
      { value: 2, label: 'Age' },
      { value: 3, label: 'Likes' },
      { value: 4, label: 'Comments' },
    ];
    const filterOptions = this.state.names.map((name, i) => ({ value: i, label: name }));
    return (
      <React.Fragment>
        <SearchDropDown placeholder={'Sort By:'} options={sortOptions} type={'SORT'} />
        <SearchDropDown placeholder={'Filter By:'} options={filterOptions} type={'FILTER'} />
        <div className={'image-container'} >
          {
            this.state.data.map((picture, i) => (
              <ImageCard
                key={i}
                pictureSrc={picture}
                onClick={() => openModal(picture)}
              />
            ))
          }
        </div >
      </React.Fragment>
    )
  }
}