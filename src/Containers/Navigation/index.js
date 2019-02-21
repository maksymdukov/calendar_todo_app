import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import {CSSTransitionGroup} from 'react-transition-group';

const LINKMAP = {
    CALENDAR_GRID: "MONTHS_GRID",
    SINGLE_DAY: "CALENDAR_GRID",
    MONTHS_GRID: "CALENDAR_GRID"
};

const Navigation = ({activeDate, handlePlus, handleMinus, activeMode, changeMode, nextHandler, prevHandler}) => {
    //Text of a button depending on activeMode
    let modeFormat;
    switch (activeMode) {
        case 'MONTHS_GRID':
            modeFormat = activeDate.format('YYYY');
            break;
        case 'CALENDAR_GRID':
            modeFormat = activeDate.format('MMMM YYYY');
            break;
        case 'SINGLE_DAY':
            modeFormat = activeDate.format('dddd, Do MMMM YYYY');
            break;
        default:
            break;
    }
    //onClick of a button depending on activeMode using LINKMAP to link them

    return (
        <div className='navigation'>
            <div className='navigation-currMonth'>
                {/*<CSSTransitionGroup*/}
                    {/*component="div"*/}
                    {/*transitionName="example"*/}
                    {/*transitionEnterTimeout={500}*/}
                    {/*transitionLeaveTimeout={0}*/}
                {/*>*/}
                <button className="currMonth-button"
                        key={modeFormat}
                        onClick={() => changeMode(LINKMAP[activeMode])}
                >
                        {modeFormat}
                </button>
                {/*</CSSTransitionGroup>*/}
            </div>
            <div className='navigation-arrows'>
                <button className="navigation-nextSlide" onClick={() => {
                    // handlePlus(activeMode);
                    nextHandler();
                }}>
                    <FontAwesomeIcon icon={faAngleUp} size="2x"/>
                </button>
                <button className="navigation-prevSlide" onClick={() => {
                    // handleMinus(activeMode);
                    prevHandler();
                }}>
                    <FontAwesomeIcon icon={faAngleDown} size="2x"/>
                </button>
            </div>

        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);