import { combineReducers } from "redux";
import subredditReducer from "./subredditReducer";
import darkModeReducer from "./darkModeReducer";

const rootReducer = combineReducers({
    subreddit: subredditReducer,
    darkMode: darkModeReducer,
});// rootReducer.js

export default rootReducer;