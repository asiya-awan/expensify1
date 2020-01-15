// METHOD BINDING
const obj1= {
    name: 'asia',
    getName () {
        return this.name;
    }
};

const getNamewoBind = obj1.getName;
console.log(getNamewoBind()); // nothing
const getName = obj1.getName.bind(obj1);
console.log(getName()); //asia

const obj2= {
    name: 'asia',
    getName: () => { this.name } 
};

const getNamewoBind2 = obj2.getName;
console.log(getNamewoBind2()); // undefined
const getName2 = objM2.getName.bind(obj2);
console.log(getName2()); //undefined