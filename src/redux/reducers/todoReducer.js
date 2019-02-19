import {ADD_TODO, DELETE_TODO} from '../types';

const todoListStorage = localStorage.getItem('todoList');


const initialState = todoListStorage ? JSON.parse(todoListStorage) : {};

const todoReducer = (state = initialState, {type, date, note, ind}) => {
    let newState;
    let newArr;
    switch (type) {
        case ADD_TODO:
            newState = {...state};
            if (!state.hasOwnProperty(date)) {
                newState[date] = [];
            }
            newArr = [...newState[date]];
            newArr.push(note);
            newState[date] = newArr;
            localStorage.setItem( 'todoList', JSON.stringify(newState) );
            return newState;
        case DELETE_TODO:
            newState = {...state};
            newArr = [...newState[date]];
            if (newArr.length) {
                newArr.splice(ind, 1);
                newState[date] = newArr;
            }
            if (!newArr.length) {
                delete newState[date];
            }
            localStorage.setItem( 'todoList', JSON.stringify(newState) );
            return newState;
        default:
            return state;
    }

};

export default todoReducer;