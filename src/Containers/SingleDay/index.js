import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import './style.css';
import TodoItem from '../../Components/TodoItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


class SingleDay extends React.Component {
    state = {
        input: ''
    };
    handleOnChange = (event) => {
        this.setState({input: event.target.value});
    };

    handleAddnote = () => {
        if (this.state.input) {
            this.props.addTodo(this.state.input, this.props.activeDate.format('YYYY MM DD'));
            this.setState({input: ''});
        }
    };

    render() {
        const {
            props: {
                activeDate,
                activeMode,
                todo,
                addTodo,
                deleteTodo
            },
            handleOnChange,
            handleAddnote,
            state
        } = this;

        let currentDay = activeDate.format('YYYY MM DD');
        const listOfTodos = todo.hasOwnProperty(currentDay)
            ? todo[currentDay]
            : [];

        return activeMode === 'SINGLE_DAY' ?
            <div className='singleDay'>
                <div className='noteList'>
                    {listOfTodos.map((note, ind) =>
                        <TodoItem key={ind} {...{note, deleteTodo, ind, currentDay}} />
                    )}
                </div>
                <div className='addNote'>
                    <textarea onChange={handleOnChange} value={state.input} placeholder="Add a note..."/>
                    <button onClick={handleAddnote}>
                        <FontAwesomeIcon icon={faPlus} size="2x"/>
                    </button>
                </div>
            </div>
            : null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay);