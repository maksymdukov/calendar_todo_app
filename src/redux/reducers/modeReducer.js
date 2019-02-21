import {CHANGE_MODE, SET_SWIPE_HANDLERS} from "../types";

const initialState = {
    activeMode: 'CALENDAR_GRID',
    nextHandler: ()=>{},
    prevHandler: ()=>{}
};

const modeReducer = (state = initialState, {type, mode, nextHandler, prevHandler}) => {
    switch (type) {
        case CHANGE_MODE:
            return {
                ...state,
                activeMode: mode
            };
        case SET_SWIPE_HANDLERS:
            return {
                ...state,
                nextHandler,
                prevHandler
            }
        default:
            return state;
    }

};

export default modeReducer;