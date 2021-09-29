// Reducer Imports
import setShoppingCartInfoReducer from './setShoppingCartInfo';
import setUserReducer from './setUser';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  shoppingCartInfoReducer: setShoppingCartInfoReducer,
  setUserReducer: setUserReducer,
});

export default reducers;
