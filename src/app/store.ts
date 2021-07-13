import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { allReducers } from '../reducers';

export const initialState = {
    loan: {
      loans: [
        {
          principal: 100000,
          interest: 5.25,
          term: 12,
          id: 1
        },
        {
          principal: 110500,
          interest: 7.3,
          term: 6,
          id: 2
        },
        {
          principal: 450000,
          interest: 4.1,
          term: 24,
          id: 3
        },
        {
          principal: 85000,
          interest: 1.25,
          term: 36,
          id: 4
        },
        {
          principal: 790400,
          interest: 2.4,
          term: 120,
          id: 5
        },
        {
          principal: 110500,
          interest: 7,
          term: 18,
          id: 6
        },
        {
          principal: 990000,
          interest: 3,
          term: 48,
          id: 7
        }
      ]
    },
    budget: {
      budgets: [
        {
          projectName: '1120 Main Street',
          totalBudget: 1200000,
          id: 1
        },
        {
          projectName: 'Titans Stadium Remodel',
          totalBudget: 3790000,
          id: 2
        },
        {
          projectName: '624 Ardee Ave',
          totalBudget: 180500,
          id: 3
        },
        {
          projectName: 'New Nissan Factory',
          totalBudget: 15000000,
          id: 4
        },
        {
          projectName: '1800 Commons Rd',
          totalBudget: 296000,
          id: 5
        },
        {
          projectName: '987 Plini Blvd',
          totalBudget: 5060000,
          id: 6
        }
      ]
    },
    collateral: {
      collateral: [
        {
          name: 'Vintage Ferrari',
          value: 250000,
          id: 1
        },
        {
          name: 'Race Horse',
          value: 70000,
          id: 2
        },
        {
          name: 'Office Building',
          value: 824000,
          id: 3
        },
        {
          name: 'Collection of Wigs',
          value: 91000,
          id: 4
        },
        {
          name: 'Saphire Bracelet',
          value: 9200,
          id: 5
        },
        {
          name: 'Large Plant Collection',
          value: 40700,
          id: 6
        }
      ]
    }
  }

export const store = createStore(allReducers, initialState, composeWithDevTools());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;