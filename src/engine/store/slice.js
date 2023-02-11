// Core
import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'todo', initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(), text: action.payload.text, isCompleted: false,
            });
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleIsCompleted(state, action) {
            const todoToggled = state.todos.find(todo => todo.id === action.payload.id);
            todoToggled.isCompleted = !todoToggled.isCompleted;
        },
    }
});

export const {addTodo, removeTodo, toggleIsCompleted} = slice.actions;
export default slice.reducer;