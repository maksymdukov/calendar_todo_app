import moment from "../../utils/moment";
import {MINUS_MONTH, PLUS_MONTH, MINUS_YEAR, PLUS_YEAR, SET_MONTH, SET_DATE, PLUS_DAY, MINUS_DAY} from '../types';

const initialState = {
    activeDate: moment(),
};

const filterReducer = (state = initialState, {type, month, date}) => {
    switch (type) {
        case MINUS_MONTH:
            return {
                ...state,
                activeDate: moment(state.activeDate).subtract(1, 'months')
            };
        case PLUS_MONTH:
            return {
                ...state,
                activeDate: moment(state.activeDate).add(1, 'months')
            };
        case MINUS_YEAR:
            return {
                ...state,
                activeDate: moment(state.activeDate).subtract(1, 'years')
            };
        case PLUS_YEAR:
            return {
                ...state,
                activeDate: moment(state.activeDate).add(1, 'years')
            };
        case MINUS_DAY:
            return {
                ...state,
                activeDate: moment(state.activeDate).subtract(1, 'days')
            };
        case PLUS_DAY:
            return {
                ...state,
                activeDate: moment(state.activeDate).add(1, 'days')
            };
        case SET_MONTH:
            return {
                ...state,
                activeDate: moment(state.activeDate).month(month)
            };
        case SET_DATE:
            return {
                ...state,
                activeDate: moment(date)
            };
        default:
            return state;
    }

};

export default filterReducer;