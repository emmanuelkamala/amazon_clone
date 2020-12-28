import data from './data';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = (state, action) => {
  return {products: data.products}
}

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;