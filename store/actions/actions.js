import {ADD_TASK, DELETE_TASK, EDIT_TASK} from './actionTypes';

    export const addTask = (task) => {
        return {
            type: ADD_TASK,
            payload: task
        };
    };

    export const deleteTask = (taskID) => {
        return {
            type: DELETE_TASK,
            payload: taskID
        };
    };

    export const editTask = (task) => {
        return {
            type: EDIT_TASK,
            payload: task
        }
    };


