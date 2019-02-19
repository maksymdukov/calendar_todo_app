import React from 'react';
import moment from "../../utils/moment";
import './style.css'

const MonthCell = ({month, activeDate, ind, setActiveMonth, changeMode}) => {
    const handleOnClick = () => {
        setActiveMonth(ind);
        changeMode('CALENDAR_GRID');
    };
    let className = 'monthCell';
    className += moment().isSame(activeDate.month(ind), 'month') ?
        ' todayCell'
        : '';
    // className += activeDate.isSame(day, 'month') ?
    //     ''
    //     : ' inactiveCell';
    return (
        <div {...{className}}>
            <button className='monthCell-wrapper' onClick={handleOnClick}>
                <div>{month}</div>
            </button>
        </div>
    );
};

export default MonthCell;