const initState = {tasks: []}
 const taskReducer = (state = initState, action) => {
     switch(action.type) {
        case 'ADD_TASK':
            const newTask = action.payload;
            return {...state, tasks: [...state.tasks, newTask]}
        case 'COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id !== action.payload.id) {
                        return task;
                    }
                        return {
                            ...task,
                            completed: !task.completed
                        }
                })
            }
        case 'DELETE_TASK':
            const updatedTask = state.tasks.filter(t => t.id !== action.payload)
            return {...state, tasks: updatedTask}
        default:
            return state
     }
 }

 export default taskReducer;