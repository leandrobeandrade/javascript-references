function nome(pessoa:{nome:string}, salario:number): void {
	console.log(pessoa.nome);
	console.log(salario);
}

interface Pessoa {
	nome: string;
}

interface Empregado extends Pessoa {
	salario: number;
}

let pessoas: Pessoa = {nome:'Fulano'};
let salario: Empregado = {nome:'Ciclano', salario:1800};

nome(salario, salario.salario);
nome(pessoas, salario.salario);
nome({nome:'Beltrano'}, 2300);

interface Diretor extends Empregado {
	readonly bonus: number;														// mesmo que const
}

let diretor: Diretor = {nome:'Ciclano', salario:1800, bonus:5};
diretor.nome = 'OutroQualquer';	 												// muda o valor de nome
nome(diretor, diretor.bonus);
