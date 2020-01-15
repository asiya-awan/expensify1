import moment from 'moment';

export default [
    {
        id:'1',
        description: 'Rent of Apartment @Latifabad',
        note: 'note example', 
        amount: 100, 
        createdAt: moment(0).add(4, 'days')
    },
    {
        id:'2',
        description: 'Buy Laptop', 
        note: 'note example', 
        amount: 300, 
        createdAt: moment(0).subtract(7, 'days')
    },
    {
        id:'3',
        description: 'Buy Coffee', 
        note: 'note example', 
        amount: 120, 
        createdAt: moment(0)
    },
    {
        id:'4',
        description: 'Buy Home', 
        note: 'note example', 
        amount: 100000, 
        createdAt: moment(0).subtract(1, 'years')
    }

];


