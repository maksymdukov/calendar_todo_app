import React from 'react';
import {getMonthsGrid} from "../../utils/calendar";
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import MonthCell from '../../Components/MonthCell';
import './style.css'


const MonthsGrid = ({activeDate, activeMode, setActiveMonth, changeMode}) => {
        return <div className='monthsGrid'>
            { getMonthsGrid.map((month, ind) =>
                <MonthCell key={month}
                           {...{month, activeDate, ind, setActiveMonth, changeMode}}
                />
                ) }
        </div>
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthsGrid);