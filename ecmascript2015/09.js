let foo = Symbol('name'); 
let bar = Symbol('name');
 console.log(foo == bar);

let obj = {
    [Symbol('name')]: 'Willian',
    [Symbol('age')]: 26,
    city: 'Dublin'
};

const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map(sym => obj[sym]);
console.log(data);

// iterators
// iterable

var txt = 'Ireland'; // iterable
var it = txt[Symbol.iterator](); // iterator
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
for ( letter of txt ) {
    console.log(letter);
    if (letter === 'a') break;
}

/*
var ninjas = {
    values: ["Leandro Beze", "Karen Regi", "Alice Andr"]
};

addMethod(ninjas, "find", function(){
    return this.values;
});

addMethod(ninjas, "find", function(name){
    var ret = [];
    for (var i=0; i<this.values.length; i++)
        if(this.values[i].indexOf(name) == 0)
            ret.push(this.values[i]);
            return ret;
});

addMethod(ninjas, "find", function(first, last){
    var ret = [];
    for (var i=0; i<this.values.length; i++)
        if(this.values[i] == (first + " " + last))
            ret.push(this.values[i]);
            return ret;
});


assert(ninjas.find().length == 3, "Encontrado todos os ninjas");

assert(ninjas.find("Karen").length == 1, "Encontrado ninja pelo primeiro nome");

assert(ninjas.find("Leandro", "Beze").length == 1, "Encontrado ninja pelo primeiro e último nome");

assert(ninjas.find("Alice", "Andr").length == 1, "Encontrado ninja pelo primeiro e último nome");*/
