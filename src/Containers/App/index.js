import React, {Component} from 'react';
import CalendarGrid from '../CalendarGrid';
import Navigation from '../Navigation';
import MonthsGrid from '../MonthsGrid';
import './style.css';
import MainSection from '../MainSection'

class App extends Component {

    render() {
        return (
            <div className='app'>
                <Navigation/>
                <hr/>
                <MainSection/>
            </div>
        );
    }
}

export default App;