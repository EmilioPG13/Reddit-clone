import { createStore } from 'redux';// store/index.js
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;