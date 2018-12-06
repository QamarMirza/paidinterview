import React from 'react';
import { SearchDropDown } from './component';
import ShallowRenderer from 'react-test-renderer/shallow';
import { findWithType } from 'react-shallow-testutils';
import Select from 'react-select';
import sinon from 'sinon';

function shallowrender(testComponent: React.Node) {
  const sr = new ShallowRenderer();
  const tree = sr.render(testComponent);
  return {
    instance: sr.getMountedInstance(),
    sr,
    tree,
    output: sr.getRenderOutput(),
  };
}

const defaultProps = {
  selectSort: 'test',
  placeholder: 'test',
  type: 'test',
  options: [
    { value: 1, label: 'Name' },
    { value: 2, label: 'Age' },
  ],
  selectSortAction: () => { },

};

function shallowRenderDropDown(props) {
  return shallowrender(<SearchDropDown  {...defaultProps} {...props} />)
}

it('renders without crashing', () => {
  const { tree } = shallowRenderDropDown();
  findWithType(tree, Select);

});
it('calls action on change', () => {
  const mockAction = sinon.spy();
  const { tree } = shallowRenderDropDown({ selectSortAction: mockAction });
  const dropdown = findWithType(tree, Select);
  dropdown.props.onChange();
  sinon.assert.calledOnce(mockAction);

});

