import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createLoan } from './actions/loan';
import { createBudget } from './actions/budget';
import { createCollateral } from './actions/collateral';

store.dispatch(createLoan(100000, 5.25, 12));
store.dispatch(createLoan(110500, 7.3, 6));
store.dispatch(createLoan(450000, 4.1, 24));
store.dispatch(createLoan(85000, 1.25, 36));
store.dispatch(createLoan(790400, 2.4, 120));
store.dispatch(createLoan(110500, 7, 18));
store.dispatch(createLoan(990000, 3, 48));

store.dispatch(createBudget('1120 Main Street', 1200000));
store.dispatch(createBudget('Titans Stadium Remodel', 3790000));
store.dispatch(createBudget('624 Ardee Ave', 180500));
store.dispatch(createBudget('New Nissan Factory', 15000000));
store.dispatch(createBudget('1800 Commons Rd', 296000));
store.dispatch(createBudget('987 Plini Blvd', 5060000));

store.dispatch(createCollateral('Vintage Ferrari', 250000));
store.dispatch(createCollateral('Race Horse', 70000));
store.dispatch(createCollateral('Office Building', 824000));
store.dispatch(createCollateral('Collection of Wigs', 91000));
store.dispatch(createCollateral('Saphire Bracelet', 9200));
store.dispatch(createCollateral('Large Plant Collection', 40700));



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;