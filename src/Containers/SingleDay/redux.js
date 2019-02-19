import {ADD_TODO, DELETE_TODO} from '../../redux/types';

export const mapStateToProps = (store) => ({
    activeDate: store.filter.activeDate,
    activeMode: store.mode.activeMode,
    todo: store.todo
});

export const mapDispatchToProps = (dispatch) => ({
    addTodo: (note, date) => dispatch({type: ADD_TODO, note, date}),
    deleteTodo: (date, ind) => dispatch({type: DELETE_TODO, date, ind}),
});