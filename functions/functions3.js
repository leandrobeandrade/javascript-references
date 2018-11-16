/* ==============================================
|		FUNÇÕES FÁBRICAS	         |
===============================================*/

var criarPessoa = function(nome, idade) {
	return {
		nome = nome,
		idade = idade
	}
};

criarPessoa('Fulano', 50)

/* ==============================================
|		FUNÇÕES CONSTRUTORAS		 |
===============================================*/

var Pessoa = function(nome, idade) {
	this.nome = nome,
	this.idade = idade
}

new Pessoa('Fulano', 50)

/*__________OU___________*/

var fulano = {};
Pessoa.call(fulano, 'Fulano', 50);

console.log(fulano)

/* ==============================================
|		CLOSURES			 |
===============================================*/

var teste = function() {
	var mensagem = 'Testando Javascript';
	return function() {
		return mensagem
	}
}

var chama = teste();

console.log(chama())
