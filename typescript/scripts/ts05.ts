function imprimir(val:string): void {								// FUNÇÃO NOMEADA
	console.log(val);
}
imprimir('Mensagem');

function teste(flag: boolean=true): void {							// pode inicialzar a flag
	let result = flag ? 'flag está true': 'flag está false';
	console.log(result);
}
teste(true);


let somar = function(n1:number, n2:number): void {						// FUNÇÃO ANÔNIMA
	console.log(`soma: ${n1 + n2}`);							// só pode ser chamada após 
}												// ser construída
somar(10,10);


let arrow1 = (n1:number, n2:number) => n1 + n2;							// ARROW FUNCTION
let arrow2 = (n1:number, n2:number) => {return n1 + n2};
let arrow3 = (nome:string, sobrenome:string) => nome + sobrenome;
let arrow4 = (nome:string, sobrenome:string) => ({nome:nome, sobrenome:sobrenome});

console.log(arrow1(100,100));
console.log(arrow2(200,200));
console.log(arrow3('Fulano',' Ciclano'));
console.log(arrow4('Beltrano',' Belciclano'));


let loteria = {
	nomes:['Javascript','Ecmascript','Typescript'], 
	teste:'Testando',
	criaLoteria: function() {
		console.log('Primeiro nível do "this": ' + this.nomes + "-" + this.teste);
		return () => {
			console.log('Segundo nível do "this:" ' + this);
			let pessoas = Math.floor(Math.random() * 3);
			return {nome:this.nomes[pessoas]};
		}
	} 
};

let t1 = loteria.criaLoteria();
let t2 = t1();

console.log(t2);
