import React, {Component} from 'react';
import Navigation from '../Navigation';
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