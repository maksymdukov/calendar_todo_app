import {MINUS_MONTH, PLUS_MONTH, MINUS_YEAR, PLUS_YEAR, CHANGE_MODE, PLUS_DAY, MINUS_DAY} from '../../redux/types';

export const mapStateToProps = (store) => ({
    activeDate: store.filter.activeDate,
    activeMode: store.mode.activeMode
});

export const mapDispatchToProps = (dispatch) => ({
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
        }
    },
    changeMode: (mode) => dispatch({type: CHANGE_MODE, mode})
});