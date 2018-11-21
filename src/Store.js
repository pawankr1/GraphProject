import { createStore } from 'redux';
import AllReducer from './reducer/AllReducer';
const initialState = {};   
const Store = createStore(AllReducer, initialState)
export default Store;