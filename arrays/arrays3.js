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
