import {MINUS_MONTH, PLUS_MONTH, MINUS_YEAR, PLUS_YEAR, CHANGE_MODE, PLUS_DAY, MINUS_DAY} from '../../redux/types';

export const mapStateToProps = (store) => ({
    activeMode: store.mode.activeMode,
});

