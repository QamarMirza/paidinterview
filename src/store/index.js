import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer, intialState } from './root-reducer';


export const enhancers = [];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

export const createStoreWithMiddleware = createStore(rootReducer, intialState, compose(applyMiddleware(), ...enhancers));
