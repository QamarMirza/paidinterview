import React from 'react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';
import { findWithType } from 'react-shallow-testutils';
import { ImageGrid } from './card-grid'

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

function shallowRenderApp() {
  return shallowrender(<App />)
}
it('renders without crashing', () => {
  const { tree } = shallowRenderApp();
  findWithType(tree, ImageGrid);

});
