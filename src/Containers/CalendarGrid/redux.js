import {CHANGE_MODE, SET_DATE} from '../../redux/types';

export const mapStateToProps = (store) => ({
    // activeDate: store.filter.activeDate,
    activeMode: store.mode.activeMode,
    todo: store.todo
});

export const mapDispatchToProps = (dispatch) => ({
    setDate: (date) => {
        dispatch({
            type: SET_DATE,
            date
        })
    },
    changeMode: (mode) => dispatch({type: CHANGE_MODE, mode})
});