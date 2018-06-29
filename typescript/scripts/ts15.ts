let pessoa = {nome:'Fulano', sobrenome:'Beltrano'};
let nome1 = pessoa;
let nome2 = pessoa.nome;
let nome3 = pessoa.sobrenome;					// Acesso normal

console.log(nome1);
console.log(nome2);
console.log(nome3);

let {nome:nomes,sobrenome:sobrenomes} = pessoa;			// Desestruturação
console.log(nomes, '-', sobrenomes);



let vetor = ['Javascript', 'Typescript'];

console.log(vetor[0]);						// Acesso normal
console.log(vetor[1]);

let [a,b] = vetor;						// Desestruturação
console.log(a,'-', b);



class Pessoa {
	constructor(public nome:string) {

	}
}

function exemplo1(pessoa: Pessoa): void {
	console.log(pessoa.nome);				// Acesso normal
}

exemplo1(new Pessoa('Fulano'));

function exemplo2({nome}): void {
	console.log(nome);					// Desestruturação
}

exemplo2(new Pessoa('Beltrano'));
exemplo2({nome:'Ciclano'});
