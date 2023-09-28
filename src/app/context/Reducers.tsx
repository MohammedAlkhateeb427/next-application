'use client';
import { useReducer, Reducer } from 'react';

type State = {
  count: number;
};

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };
  const initialState: State = {
    count: 0,
  };
export const CartReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};
