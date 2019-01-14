let teste: any= "Javascript";

let comprim: number = (<string>teste).length;						// (<string>) força para tipo string
let tamanho: string = (teste as string).toUpperCase();

console.log(comprim);
console.log(tamanho); 

/*-------------*/

function num(v1:number, v2:number, v3?:number): number {				// ? indica que o argumento é opcional
	if (v3 != undefined) {
		return v1 + v2 + v3;
	}
	return v1 + v2;
}

console.log(num(10,10,10));

/*-------------*/

function test(v1: any, v2:any, v3?:any): any {						// retorno sem saber o tipo
	if (v3 != undefined) {
		return v1 + v2 + v3;
	}
	return v1 + v2;
}

console.log(`retorno com number: ${test(10,10,10)}`);
console.log(`retorno com string: ${test('Fulano ','Ciclano ','Beltrano')}`);

/*-------------*/

function add(v1:string, ...v2:number[]): void {						// ... rest parameter
	let soma: number = 0;
	for (var i=0; i<v2.length; i++) {
		soma += v2[i];
	}
	console.log(v1 + soma);
}
add('A soma é: ', 10,5,5);

/*-------------*/

function nome(pessoa:{nome:string}): void {
	console.log(pessoa.nome);
}

let randomObj1 = {nome:'Fulano', idade:32};		

nome(randomObj1);
