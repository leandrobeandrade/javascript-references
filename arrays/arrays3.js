var carros = [
	{marca: 'Ford', modelo: 'Ka'},
	{marca: 'GM', modelo: 'Corsa'},
	{marca: 'Fiat', modelo: 'Palio'},
];

/* ===============================================
|			FILTER      		  |
================================================*/
// Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

var filtra = carros.filter(function(elemento) {
	return elemento.marca === 'Ford'
})

console.log(filtra)



/* ===============================================
|			MAP    			  |
================================================*/
// Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

var mapeia = carros.map(function(elemento) {
	return elemento.modelo.length
})

console.log(mapeia)



/* ===============================================
|			REDUCE   		  |
================================================*/
// Executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.

var carro = [
	{marca: 'Ford', preco: 28800},
	{marca: 'GM', preco: 34750},
	{marca: 'Fiat', preco: 32000},
];

var reduz = carro.reduce(function(anterior, atual) {
	return anterior + atual.preco
},0)

console.log(reduz)



/* ===============================================
|			FOREACH   	          |
================================================*/
// Executa uma dada função em cada elemento de um array.

var total = 0;

var usaforEach = carro.forEach(function(elemento) {
	total += elemento.preco
})

console.log(total)



/* ===============================================
|			FIND()   	          |
================================================*/

//retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.

var array1 = [5, 12, 8, 130, 44];

console.log(array1.find((element) => element > 10));  // retorna 12

const inventario = [
    {nome: 'maças', quantidade: 2},
    {nome: 'bananas', quantidade: 0},
    {nome: 'cerejas', quantidade: 5}
];

function cerejas(frutas) { 
    return frutas.nome === 'cerejas';
}

console.log(inventario.find(cerejas)); // retorna { "nome": "cerejas", "quantidade": 5 }
console.log(inventario.find(frutas => frutas.nome === 'cerejas')) // retorna { "nome": "cerejas", "quantidade": 5



/* ===============================================
|			SOME()   	          |
================================================*/

//testa se ao menos 1 dos elementos no array passam no teste implementado pela função atribuída.

function maiorQue(elemento) {
  return elemento > 10;
}

let array1 = [2, 5, 8, 1, 4];
let array2 = [12, 5, 8, 1, 4];

console.log(array1.some(maiorQue)); // retorna false
console.log(array2.some(maiorQue)); // retorna true

console.log(array1.some(element => element > 10))/  // retorna false
console.log(array2.some(element => element > 10))/  // retorna true



/* ===============================================
|			EVERY()   	          |
================================================*/
// testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

function maiorQue(elemento) {
  return elemento > 10;
}

let array1 = [12, 5, 8, 130, 44];
let array2 = [12, 54, 18, 130, 44];

console.log(array1.every(maiorQue)); // false
console.log(array2.every(maiorQue)); // true


| findIndex() => O método findIndex () retorna o índice do primeiro elemento em uma matriz que passa em um teste pela função fornecida.


let idades = [3, 10, 18, 20];

function adulto(idade) {
  return idade >= 18;
}

console.log(idades.findIndex(Adulto); // retorna 2
console.log(idades.findIndex(idade => idade >= 18)); // retorna 2
