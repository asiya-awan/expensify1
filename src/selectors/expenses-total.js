export default (expenses) => (
     expenses
        .map((expenses) => expenses.amount)
        .reduce((sum,value) => {
            sum+value
         }, 0)
);
