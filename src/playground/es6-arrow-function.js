const square = function (x) {
    return x *x;
};

console.log('Square func',square(8));

const squareArrow1 = (x) =>  x *x;
const squareArrow2 = (x) => {
    return x *x;
} 

console.log('Square Arrow1 func:',squareArrow1(8));
console.log('Square Arrow2 func:',squareArrow2(8));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log('getFirstName(fullName):', getFirstName('Asia Kainat Awan'));


const user = {
    name: 'Nazneen',
    cities: ['Philadelphia', 'New york', 'Dublin','Pakistan'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has lived in '+ city);
    },
    printPlacesLivedStartWith(letter) {
        // return this.cities.map((city) => city.startsWith(letter)); //[true, false, false, true]
        // return this.cities.map((city) => city.startsWith(letter)).filter(Boolean)  //[true, true]
        return this.cities.filter((city) => city.startsWith(letter)) //['Philadelphia', 'Pakistan']
    }
}

console.log(user.printPlacesLived());
console.log(user.printPlacesLivedStartWith('P'));

