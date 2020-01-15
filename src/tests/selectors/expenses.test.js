import ExpensesSelector from '../../selectors/expenses';
import expenses from '../fixture/expenses';
import {defaultFilter, filter } from '../fixture/filters';
import moment from 'moment';


test('select expenses having filter of text: Buy and amount', () => {
    const action = ExpensesSelector(expenses, filter );
    expect(action).toEqual([expenses[3],expenses[1], expenses[2]])  
});

test('should filter by text value', () => {
    const action = ExpensesSelector(expenses, {...defaultFilter, text:'Buy Home' } );
    expect(action).toEqual([expenses[3]]); 
});

test('should filter by startDate', () => {
    const action = ExpensesSelector(expenses, {...defaultFilter, startDate: moment(0).subtract(1,'month') } );
    expect(action).toEqual([expenses[0],expenses[2],expenses[1]]); 
});

test('should filter by endDate', () => {
    const action = ExpensesSelector(expenses, {...defaultFilter, endDate: moment(0).subtract(1,'week') } );
    expect(action).toEqual([expenses[1],expenses[3]]); 
});

test('should sortBy by date', () => {
    const action = ExpensesSelector(expenses, {...defaultFilter, sortBy: 'date' } );
    expect(action).toEqual([expenses[0],expenses[2], expenses[1],expenses[3]]); 
});

test('should sortBy by amount', () => {
    const action = ExpensesSelector(expenses, {...defaultFilter, sortBy: 'amount' } );
    expect(action).toEqual([expenses[3],expenses[1], expenses[2],expenses[0]]); 
});
