function listaReversa <T> (lista:Array<T>) {							// ou lista: T[]
	let listaReversada: T[] = [];

	for (let i=lista.length - 1; i >= 0; i--) {
		listaReversada.push(lista[i]);
	}
	return listaReversada;
}

let nomes = ['Fulano', 'Beltrano', 'Ciclano'];
let numer = [1,2,3,4,5];
let nomesReversados = listaReversa<string>(nomes);
let numerReversados = listaReversa<number>(numer);

console.log(nomesReversados);
console.log(numerReversados);


class PessoaTeste {
	private _nome: string;

	constructor(nome:string) {
		this._nome = nome;
	}
	print(): void {
		console.log(`nome: ${this._nome}`);
	}
	get nome(): string {
		return this._nome;
	}
	set nome(valor: string) {
		this._nome = valor;
	}
}

interface Repositorio <T,ID> {
	encontrarId(id:ID): T;
	salvar(entidade:T): T;
}

class PessoaRepositorio implements Repositorio<PessoaTeste, number> {
	
	encontrarId(id:number): PessoaTeste {
		console.log(`Id: ${id}`);
		return new PessoaTeste('Belciclano');
	}
	salvar(entidade: PessoaTeste): PessoaTeste {
		return new PessoaTeste('Outro qualquer');
	}
}

let pessoaRepositorio = new PessoaRepositorio();
console.log(pessoaRepositorio.encontrarId(5));
console.log(pessoaRepositorio.salvar(new PessoaTeste('Testando')));