function Teste(callback:(name:string) => void): void { 
	callback.call(this, 'Fulano');
	callback.apply(this, ['Beltrano', 'Ciclano']);
	callback('Belciclano');
}

function Executar(nome:string) { 
	console.log(nome);
}

Teste(Executar);


function Calculadora1(num1:number, num2:number, tipo:string): number {
	switch (tipo) {
		case "add":
			return num1 + num2;
			break;
		case "mul":
			return num1 * num2;
			break;
		default:
			return 0;
	}	
}

function Add(num1:number, num2:number): number {
	return num1 + num2;
}

function Mul(num1:number, num2:number): number {
	return num1 * num2;
}

function Calculadora2(num1:number, num2:number, callback): number {
	return callback(num1, num2);
}

function Calculadora3(num1:number, num2:number, callback:(num1:number,num2:number) => number): number {
	return callback(num1, num2);
}

console.log(Calculadora1(10,10,'mul'));
console.log(Calculadora1(10,10,'add'));
console.log(Calculadora1(10,10,'   '));

console.log(Calculadora2(25,25,Add));
console.log(Calculadora2(25,25,Mul));

console.log(Calculadora3(10,20,(num1,num2) => {
	return num1 - num2;
}));
