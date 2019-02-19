import React from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({note, deleteTodo, ind, currentDay}) => {
    return (
        <div className='todoItem'>
            <div className='todoItem-text'>
                {note}
            </div>
            <div className='todoItem-remove'>
                <button onClick={() => deleteTodo(currentDay, ind)}>
                    <FontAwesomeIcon icon={faTimes} size='2x' />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;