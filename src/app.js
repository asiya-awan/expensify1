import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense } from './actions/expenses';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();




const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));



// const expenseOne = store.dispatch(addExpense({description: 'Rent of Apartment @Latifabad', note: 'note example', amount: 100, createdAt: -21000}));
// const expenseTwo = store.dispatch(addExpense({description: 'Buy Laptop', note: 'note example', amount: 300, createdAt: -1000}));
// const expenseThree = store.dispatch(addExpense({description: 'Buy Coffee', note: 'note example', amount: 100, createdAt: -1000}));
// store.dispatch(setTextFilter('rent'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('buy'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log("VisibleExpenses: ", visibleExpenses);

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//       console.log("VisibleExpenses: ", visibleExpenses);
//   });
//console.log(expenseOne);


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense( expenseTwo.expense.id, { amount:500} ));

//store.dispatch(sortByDate('date'));
//store.dispatch(sortByAmount('amount'));
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(101));