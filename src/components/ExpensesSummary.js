import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { expensesTotal } from '../selectors/expenses-total';
import { selectExpenses } from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {

    
}
  <div>
    <h4>Expense Summary</h4>
    {
        (expenseCount>0)? <p><strong>Total </strong>{numeral(expensesTotal).format('$0,0.00')}</p> :""
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: expensesTotal(state.expenses),
    expensesTotal: selectExpenses(state.expenses, state.filter).length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
