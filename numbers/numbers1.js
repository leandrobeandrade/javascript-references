var numero1 = 1000; 
var numero2 = 10.3;
var numero3 = 9.656;

var teste1 = numero1.toExponential();
var teste2 = numero1.toExponential(2);
var teste3 = numero1.toExponential(3);
var teste4 = numero2.toFixed();
var teste5 = numero2.toFixed(2);
var teste6 = numero2.toFixed(3);
var teste7 = numero3.toPrecision();
var teste8 = numero3.toPrecision(2);
var teste9 = numero3.toPrecision(3);

console.log(numero1);                 // 1000
console.log(teste1);                  // '1e+3'
console.log(teste2);                  // '1.00e+3'
console.log(teste3);                  // '1.000e+3'
console.log(numero2);                 // 10.3
console.log(teste4);                  // '10'
console.log(teste5);                  // '10.30'
console.log(teste6);                  // '10.300'
console.log(teste7);                  // '9.656'
console.log(teste8);                  // '9.7'
console.log(teste9);                  // '9.66'
 
/*
  1000 X
"1e+3" X
"1.00e+3" X
"1.000e+3" X
10.3 X
*/
