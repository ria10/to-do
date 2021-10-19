import {nanoid} from 'nanoid';

export const addTask = (e) => {
    return {
        type: 'ADD_TASK',
        payload: { 
            id: nanoid(),
            text: e.target[0].value,
            completed: false
         }
}};

export const toggleComplete = (id) => {
    return {
        type: 'COMPLETE_TASK',
        payload: {
            id: id
        }
    }
};

export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
}};
