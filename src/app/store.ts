import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { allReducers } from '../reducers';

let store = createStore(allReducers, composeWithDevTools());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;