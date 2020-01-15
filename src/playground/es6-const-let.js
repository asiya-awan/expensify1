console.log('aSiya');

var nameVar = "Asia";
var nameVar = 'Mike';

console.log('nameVar:', nameVar);

let nameLet ='Jen';
nameLet = 'Julie';
console.log('nameLet:', nameLet);

// let nameLet = 'Kainat'; // nameLet has already been declared
// console.log('nameLet:', nameLet);

const nameConst ='Malik';
console.log('nameConst:',nameConst);


// nameConst = 'Awan'; //error const is read-only
// console.log('nameConst:',nameConst);  


/* BLOCK SCOPING  */

//const and let has block scoping { }
var fullName = 'Asia Kainat Awan';  //global scope
if(fullName) {
    const firstName = fullName.split(' ')[0];
    let middleName = fullName.split(' ')[1];
    var lastName = fullName.split(' ')[2];

    console.log(firstName);

}
// console.log('const firstName outside block scope:',firstName);  //firstName is not defined
// console.log('const middleName outside block scope:',middleName);  //middleName is not defined
console.log('const lastName outside block scope:',lastName);  // Awan

//hoisting 
console.log('shape before declaring: ',shape); //undefined ; doesn't throw error
var shape = 'triangle';
console.log('shape after declaring: ',shape);
