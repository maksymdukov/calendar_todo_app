import {combineReducers} from 'redux';
import filterReducer from './filterReducer';
import modeReducer from "./modeReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    mode: modeReducer,
    todo: todoReducer
});

export default rootReducer;