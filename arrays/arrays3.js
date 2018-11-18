var carros = [
	{marca: 'Ford', modelo: 'Ka'},
	{marca: 'GM', modelo: 'Corsa'},
	{marca: 'Fiat', modelo: 'Palio'},
];

/* ===============================================
|			FILTER      		  |
================================================*/

var filtra = carros.filter(function(elemento) {
	return elemento.marca === 'Ford'
})

console.log(filtra)

/* ===============================================
|			MAP    			  |
================================================*/

var mapeia = carros.map(function(elemento) {
	return elemento.modelo.length
})

console.log(mapeia)

/* ===============================================
|			REDUCE   		  |
================================================*/

var carro = [
	{marca: 'Ford', preco: 28800},
	{marca: 'GM', preco: 34750},
	{marca: 'Fiat', preco: 32000},
];

carro.reduce(function(anterior, atual) {
	return anterior + atual.preco
},0)


/* ===============================================
|			FOREACH   	          |
================================================*/

var total = 0;

var usaforEach = carro.forEach(function(elemento) {
	total += elemento.preco
})

console.log(total)
