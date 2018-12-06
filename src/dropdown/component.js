import React, { Component } from 'react';
import Select from 'react-select';

type Props = {
  selectSort: Object,
  placeholder: string,
  type: string,
  options: Array<Object>,
  selectSortAction: (any) => void,
};
type State = {
  selectedOption?: Object,
}
export class SearchDropDown extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedOption: this.props.selectSort,
    }
  }

  handleChange = (selectedOption?: Object) => {
    this.setState({ selectedOption });
    const payload = {
      type: this.props.type,
      selectedOption: selectedOption ? selectedOption.label : null,
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