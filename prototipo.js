function Pessoa(primeiro, ultimo, idade, cor) {			//--------> PROTÓTIPO - FUNÇÃO CONSTRUTORA
	this.primeiro = primeiro;
	this.ultimo = ultimo;
	this.idade = idade;
	this.cor = cor;
}

var pai = new Pessoa('Leandro', 'Andrade', 34, 'pardo');
	pai.nacionalidade = 'brasileiro';
	pai.nome = function(){
	return this.primeiro +' '+ this.ultimo;
}

console.log(pai.primeiro);
console.log(pai.nacionalidade);
console.log(pai.nome());

var Pessoa2 = {						//--------> OBJETO
	primeiroNome: 'Leandro',
	ultimoNome: 'Andrade',
	fullNome: function(){
		return this.primeiroNome +' '+ this.ultimoNome
	}
}
var Objeto = {
	primeiroNome: 'Karen',
	ultimoNome: 'Santos'
}
var Objeto2 = {
	primeiroNome: 'Alice',
	ultimoNome: 'Santos de Andrade'
}

console.log("Objeto ->"+ Pessoa2.fullNome(Objeto));
console.log("Call ->"+ Pessoa2.fullNome.call(Objeto));
console.log("Apply ->"+ Pessoa2.fullNome.apply(Objeto2));
