import {
    CHANGE_MODE, MINUS_DAY,
    MINUS_MONTH, MINUS_YEAR,
    PLUS_DAY,
    PLUS_MONTH,
    PLUS_YEAR,
    SET_DATE,
    SET_SWIPE_HANDLERS
} from '../../redux/types';

export const mapStateToProps = (store) => ({
    activeDate: store.filter.activeDate,
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
    changeMode: (mode) => dispatch({
        type: CHANGE_MODE,
        mode,
    }),
    setHandlers: (nextHandler, prevHandler) => dispatch({
        type: SET_SWIPE_HANDLERS,
        nextHandler,
        prevHandler
    }),
    handlePlus: (incType) => {
        switch (incType) {
            case 'CALENDAR_GRID':
                dispatch({type: PLUS_MONTH});
                break;
            case 'MONTHS_GRID':
                dispatch({type: PLUS_YEAR});
                break;
            case 'SINGLE_DAY':
                dispatch({type: PLUS_DAY});
                break;
            default:
                break;
        }
    },
    handleMinus: (decType) => {
        switch (decType) {
            case 'CALENDAR_GRID':
                dispatch({type: MINUS_MONTH});
                break;
            case 'MONTHS_GRID':
                dispatch({type: MINUS_YEAR});
                break;
            case 'SINGLE_DAY':
                dispatch({type: MINUS_DAY});
                break;
            default:
                break;
        }
    }
});