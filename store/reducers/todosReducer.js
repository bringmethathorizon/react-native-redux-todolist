import React from 'react';
import {ADD_TASK, DELETE_TASK,EDIT_TASK} from "../actions/actionTypes";


const initialState = {
    todos: []
};

export default taskReducer = (state = initialState, action) => {
        switch(action.type){
            case ADD_TASK:
                return{
                    ...state,
                    todos: state.todos.concat(action.payload)
                };

            case DELETE_TASK:
                return {
                    ...state,
                   // todos: state.todos.slice(),
                   // todos: state.todos.splice(action.payload,1)
                    // todos: state.todos.slice(action.payload, 1)
                    todos: state.todos.filter(todo => (todo !== action.payload))
                };
            case EDIT_TASK:
                return {
                    ...state,

                };


            default:
                return state;

        }
}
