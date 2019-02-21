import React from 'react';
import Navigation from '../Navigation';
import './style.css';
import MainSection from '../MainSection'

const App = () => {
        return (
            <div>
                <div className='app'>
                    <Navigation/>
                    <hr/>
                    <MainSection/>
                </div>
            </div>

        );
    };

export default App;