import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import moment from 'moment';

// 액션 타입 정의
const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const ADD = 'todo/ADD';
const COMPLETE = 'todo/COMPLETE';
const REMOVE = 'todo/REMOVE';
let id = 0;

// 액션 생성 함수 정의
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const addTodo = createAction(ADD, text => ({text, id: id++, createAt: moment().format('YYYY-MM-DD HH:mm:ss')}));
export const complete = createAction(COMPLETE, id => id);
export const removeTodo = createAction(REMOVE, id => id);

// 초기 상태 정의
const initailState = {
  text: '',
  itemText: '',
  list: []
};

// 리듀서 작성
export default handleActions({
  [CHANGE_INPUT]: (state, action) =>
    produce(state, draft => {
      draft.text = action.payload;
    }),
  [ADD]: (state, action) =>
    produce(state, draft => {
      draft.list.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
        createAt: action.payload.createAt
      })
    }),
  [COMPLETE]: (state, action) =>
    produce(state, draft => {
      const item = draft.list.find(item => item.id === action.payload);
      item.completed = !item.completed;
    }),
  [REMOVE]: (state, action) =>
    produce(state, draft => {
      draft.list.splice(
        draft.list.findIndex(item => item.id === action.payload), 1
      )
    })
}, initailState);