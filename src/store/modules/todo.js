import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const ADD = 'todo/ADD';
const EDIT = 'todo/EDIT';
const UPDATE = 'todo/UPDATE';
const COMPLETE = 'todo/COMPLETE';
const DETELE = 'todo/DELETE';

let id = 0;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const addTodo = createAction(ADD, text => ({text, id: id++}));
export const editTodo = createAction(EDIT, id => id);
export const updateTodo = createAction(UPDATE, id => id);
export const completeTodo = createAction(COMPLETE, id => id);
export const deleteTodo = createAction(DETELE, id => id);

const initialState = {
  input: '',
  list: []
};

export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    input: action.payload
  })
}, initialState)