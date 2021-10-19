import React from 'react'
import { useDispatch} from 'react-redux';
import {toggleComplete, deleteTask} from '../actions'

const Task = ({ id, text, completed }) => {
    const dispatch = useDispatch()
    const handleCheckboxClick = () => dispatch(toggleComplete(id))
    const handleDeleteClick = () => dispatch(deleteTask(id))
    return (
        <div>
            <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onChange={handleCheckboxClick}
					></input>
					{text}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
        </div>
    )
}

export default Task
