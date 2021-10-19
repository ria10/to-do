import React from 'react'
import { useSelector} from 'react-redux';
import TodoItem from './Task'

const TaskList = () => {
    const todos = useSelector(state => state.tasks);
    return (
        <div>
            <ul className='list-group'>
			{todos.map((task) => (
				<TodoItem id={task.id} key={task.id} text={task.text} completed={task.completed}/>
			))}
		</ul>
        </div>
    )
}

export default TaskList
