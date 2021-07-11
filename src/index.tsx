import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { allReducers } from './reducers';
import { Provider } from 'react-redux';

//ACTION
const createLoan = (principal: string, interest: string, term: string)  => {
  return {
      type: "CREATE",
      payload: {
          principal,
          interest,
          term
      }
  }
}

//STORE
let store = createStore(allReducers, composeWithDevTools());

//DISPATCH
store.dispatch(createLoan("10000", "7", "12"));

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;