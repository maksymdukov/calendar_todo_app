import {CHANGE_MODE, SET_MONTH} from '../../redux/types';

export const mapStateToProps = (store) => ({
    // activeDate: store.filter.activeDate,
    activeMode: store.mode.activeMode
});

export const mapDispatchToProps = (dispatch) => ({
    setActiveMonth: (month) => {
        dispatch({
            type: SET_MONTH,
            month
        })
    },
    changeMode: (mode) => dispatch({type: CHANGE_MODE, mode})
});