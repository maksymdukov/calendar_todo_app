import React from 'react';
import CalendarGrid from "../CalendarGrid";
import MonthsGrid from "../MonthsGrid";
import SingleDay from '../SingleDay';
import './style.css';
import {mapStateToProps} from "./redux";
import CustomSwiper from "../CustomSwiper";
import {connect} from "react-redux";
import CustomSwiper2 from "../CustomSwiper2";

const MainSection = ({activeMode}) => {
    return (
        <div className='mainSection'>
            {activeMode === "CALENDAR_GRID" &&
            <CustomSwiper2
                render={(date)=><CalendarGrid activeDate={date} />}
            />
            }

            {/*{activeMode === "CALENDAR_GRID" &&*/}
            {/*<CustomSwiper render={*/}
                {/*(date) => (<CalendarGrid activeDate={date}/>)*/}
            {/*}/>*/}
            {/*}*/}

            {activeMode === "MONTHS_GRID" &&
            <CustomSwiper2
                render={(date)=><MonthsGrid activeDate={date} />}
            />
            }

            {/*{activeMode === "MONTHS_GRID" &&*/}
            {/*<CustomSwiper render={*/}
                {/*(date) => (<MonthsGrid activeDate={date}/>)*/}
            {/*}/>*/}
            {/*}*/}

            {activeMode === "SINGLE_DAY" &&
            <CustomSwiper2
                render={(date)=><SingleDay activeDate={date} />}
            />
            }

            {/*{activeMode === "SINGLE_DAY" &&*/}
            {/*<CustomSwiper render={*/}
                {/*(date) => (<SingleDay activeDate={date}/>)*/}
            {/*}/>*/}
            {/*}*/}
        </div>
    );
};

export default connect(mapStateToProps, null)(MainSection);