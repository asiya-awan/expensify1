import filterReducer from '../../reducers/filters';
import expenses from '../fixture/expenses';
import setTextFilter from '../../actions/filters';
import {defaultFilter, filter } from '../fixture/filters';
import moment from 'moment';
import { exportAllDeclaration } from '@babel/types';

test('should set up default filter value', () => {
 const state = filterReducer(undefined, {type: '@@INIT'});
 expect(state).toEqual({
    text: '',
    sortBy: 'date',   //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
 });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT', sortBy: 'amount'});
    console.log(state);
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_DATE', sortBy: 'date'});
    console.log(state);
    expect(state.sortBy).toBe('date');
});

test('should set startDate', () => {
    const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).add(1,'day')});
    console.log(state);
    expect(state.startDate).toBe({moment(0).add(1,'day')});
});

// test('', () => {

// });
// test('', () => {

// });
