var outroExemplo1 = /** @class */ (function () {
    function outroExemplo1() { 
    }
    return outroExemplo1;
}());
var outroExemplo2 = /** @class */ (function () {
    function outroExemplo2() {
    }
    return outroExemplo2;
}());
var exemplo1;
console.log(exemplo1 = new outroExemplo1());
// console.log(exemplo = new outroExemplo2());									erro
var exemplo2 = { nome: 'Fulano', idade: 34 };
exemplo1 = exemplo2;
console.log(exemplo1);
// exemplo1 = {nome:'Fulano', idade:34};										erro
function testeExemplo1(ex) {
    console.log(ex.nome);
}
var exemplo3 = { nome: 'Ciclano', idade: 34 };
testeExemplo1(exemplo3);
testeExemplo1({ nome: 'Fulano' });
//testeExemplo1({nome:'Fulano', idade: 34});									erro
var x1 = function (a) { return a; };
var x2 = function (b, c) { return b + c; };
var x3 = function (b, c) { return b; };
console.log(10);
console.log(10, 'teste');
//x2 = x1;																		erro - x2 tem mais argumentos
x3 = x1;
console.log(x3(50, 'qualquer coisa'));
var itens = [1, 2, 3];
itens.forEach(function (item, index, array) { return console.log(item); });
itens.forEach(function (item) { return console.log(item); });
