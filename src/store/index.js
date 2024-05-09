import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/subredditReducer';


const store = configureStore({
    reducer: rootReducer,
});

export default store;