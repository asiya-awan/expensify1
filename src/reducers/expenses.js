const expensesReducerDefaultState = [];

export  default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expense]
           //return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
            // return state.filter((expense) => 
            //     {    
            //         if( expense.id != action.id ){
            //             return expense;
            //         }
            //     });
        case 'EDIT_EXPENSE':
                
            return state.map((expense) => {
                    
                if(expense.id === action.id)
                    // return {...expense, amount:action.updates.amount}
                    return {...expense, ...action.updates}
                else    
                    return expense;
            });


        default:
            return state;
    }
};