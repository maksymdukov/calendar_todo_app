import React from 'react';
import {getMonthsGrid} from "../../utils/calendar";
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import MonthCell from '../../Components/MonthCell';
import './style.css'


const MonthsGrid = ({activeDate, activeMode, setActiveMonth, changeMode}) => {
    // let monthGrid = getMonthsGrid();
    return activeMode === 'MONTHS_GRID'
        ? <div className='monthsGrid'>
            { getMonthsGrid().map((month, ind) =>
                <MonthCell key={month}
                           {...{month, activeDate, ind, setActiveMonth, changeMode}}
                />
                ) }
        </div>
        : null;

};

export default connect(mapStateToProps, mapDispatchToProps)(MonthsGrid);