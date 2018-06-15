class Pessoa {
	public nome: string;							// modificador de acesso public
	constructor(nome:string) {
		this.nome = nome;
	}
	print(): void {
		console.log(`nome: ${this.nome}`);
	}
}

class Empregado  extends Pessoa {
	private salario: number;						// modificador de acesso protected
	constructor(nome:string, salario:number){
		super(nome);
		this.salario = salario;
	}
	print(): void {
		super.print();
		console.log(`salario: ${this.salario}`);
	}
}

let pes1 = new Pessoa('Fulano');
let emp1 = new Empregado('Beltrano', 2500);

pes1.print();
emp1.print();

let pes2 = {nome: 'Ciclano'} as Pessoa;						// cria uma pessoa de Pessoa
console.log(pes2);

let pes3 = <Pessoa>{};
pes3.nome = 'Belciclano';							// cria um pessoa de Pessoa
console.log(pes3);

let pes4: Pessoa = new Empregado('Ted',3500);					// polimorfismo
pes4.print();
