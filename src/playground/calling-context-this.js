//Calling Context   https://codecraft.tv/courses/angular/es6-typescript/arrow/
let objThis = {
    name: "asim",
    sayLater: function () {
       // console.log('this', this);
        setTimeout(function () {
            console.log(`this.name in function: ${this.name}`); // Use  this - empty
        }, 1000);
    }
};
console.log('----- ObjThis in function: ------');  
console.log(objThis.sayLater());  //undefined

let objSelf = {
    name: "asim",
    sayLater: function () {
        let self = this; // Assign to self
        console.log(self);
        setTimeout(function () {
            console.log(`Self.name: ${self.name}`); // Use self not this  - // asim
        }, 1000);
    }
};
console.log(' ----- ObjSelf in function: ------');
console.log(objSelf.sayLater()); //undefined

let objFatArrow = {
    name: "asim",
    sayLater: function () {
        setTimeout(() => {  //FAT ARROW FUNC w/ this
            console.log(`this.name in fat arrow: ${this.name}`); // Use this w/ fat arrow func
        }, 1000);
    }
};
console.log('ObjFatArrow in function:');
console.log( objFatArrow.sayLater());


