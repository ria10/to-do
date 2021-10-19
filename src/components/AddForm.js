import React from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../actions'

const AddButton = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addTask(e))
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" placeholder="add a task..."></input>
                <input type="submit" value="+"></input>
            </form>
        </div>
    )
}

export default AddButton