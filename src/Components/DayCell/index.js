import React from 'react';
import './style.css';
import moment from "../../utils/moment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faListAlt} from '@fortawesome/free-solid-svg-icons'

const DayCell = ({day, activeDate, setDate, changeMode, todo}) => {
    // let fullDate = activeDate.format('YYYY MM DD');
    let className = 'dayCell';
    className += moment().isSame(day, 'day') ?
        ' todayCell'
        : '';
    className += activeDate.isSame(day, 'month') ?
        ''
        : ' inactiveCell';

    const onClickHandler = () => {
        setDate(day);
        changeMode('SINGLE_DAY');
    };

    const TodoIcon = (
        <span className='dayCell-icon'>
            <FontAwesomeIcon icon={faListAlt} size="1x"/>
        </span>
    );

    return (
        <div {...{className}}>
            <button className='dayCell-wrapper' onClick={onClickHandler}>
                <div className='dayCell-date'>
                    {moment(day).date()}
                    {todo.hasOwnProperty(day) && TodoIcon}
                </div>
            </button>
        </div>
    );
};

export default DayCell;