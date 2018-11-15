/* ===============================================
|		ESCREVENDO FUNÇÕES	          |
================================================*/

function somar(a,b) {							// Função declarada
	return a + b							// Esta maneira é carregada antes da interpretação
}									// podendo ser invocada antes da sua declaração

var somar = function(a,b) {						// Função expressa em uma variável
	return a + b
}

var somar = function somar(a,b) {    					// Função expressa nomeada
	return a + b
}

/* ===============================================
|		INVOCANDO FUNÇÕES	          |
================================================*/

function somar(a,b) {
	return a + b
}

somar(1+1)								// Invocada diretamente

/*_____________________*/

var produto = {id: 1, preco: 55.00};
var imposto = function(preco) {
	return preco * 0.1
};

var calcula = function(produto, impostos) {				// Invocada como parâmetro
	return produto.preco + impostos(produto.preco)
}

calcula(produto, imposto);

/*_____________________*/

var teste = function() {
	return function() {						// Invocada por outra função
		return 'Testando Javascript'
	}
}

teste()()
