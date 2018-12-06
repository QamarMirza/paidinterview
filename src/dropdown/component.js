import React, { Component } from 'react';
import Select from 'react-select';


export class SearchDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: this.props.selectSort,
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    const payload = {
      type: this.props.type,
      selectedOption,
    };
    this.props.selectSortAction(payload);
  }

  render() {
    const { selectedOption } = this.state;
    const { placeholder, options } = this.props;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isSearchable
        placeholder={placeholder}
        isClearable={true}
      />
    )
  }
};