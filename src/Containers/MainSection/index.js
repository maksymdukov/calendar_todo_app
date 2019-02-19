import React from 'react';
import CalendarGrid from "../CalendarGrid";
import MonthsGrid from "../MonthsGrid";
import SingleDay from '../SingleDay';
import './style.css';

const MainSection = () => {
    return (
        <div className='mainSection'>
            <CalendarGrid/>
            <MonthsGrid/>
            <SingleDay/>
        </div>
    );
};

export default MainSection;