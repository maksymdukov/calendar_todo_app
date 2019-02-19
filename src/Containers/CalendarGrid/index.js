import React from 'react';
import {getWeeksGrid, getDaysOfWeek} from "../../utils/calendar";
import DayCell from '../../Components/DayCell/index';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import './style.css'


const CalendarGrid = ({activeDate, activeMode, setDate, changeMode, todo}) => {

    const grid = getWeeksGrid(activeDate);
    const daysOfWeek = getDaysOfWeek();

    return activeMode === 'CALENDAR_GRID'
        ? <div className='calendarGrid'>
            {daysOfWeek.map(name =>
                <div key={name} className="dayOfWeek">
                    {name}
                </div>
            )}

            {grid.map(row => {
                return row.map(day =>
                    <DayCell key={day} {...{day, activeDate, setDate, changeMode, todo}} />
                )
            })}
        </div>
        : null;

};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarGrid);