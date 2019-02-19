import {CHANGE_MODE} from "../types";

const initialState = {
    activeMode: 'CALENDAR_GRID'
};

const modeReducer = (state = initialState, {type, mode}) => {
    switch (type) {
        case CHANGE_MODE:
            return {
                ...state,
                activeMode: mode
            };
        default:
            return state;
    }

};

export default modeReducer;