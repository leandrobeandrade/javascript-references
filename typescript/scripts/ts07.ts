interface Exemplo1 { 
	nome: string;
}

class outroExemplo1 {
	nome: string;
	idade: number;
}

class outroExemplo2 {
	num: string;
}

let exemplo1: Exemplo1;
console.log(exemplo1 = new outroExemplo1());
// console.log(exemplo = new outroExemplo2());							erro
let exemplo2 = {nome:'Fulano', idade:34};
exemplo1 = exemplo2;
console.log(exemplo1);
// exemplo1 = {nome:'Fulano', idade:34};							erro


function testeExemplo1(ex: Exemplo1) {
	console.log(ex.nome);
}

let exemplo3 = {nome:'Ciclano', idade:34};
testeExemplo1(exemplo3);
testeExemplo1({nome:'Fulano'});
//testeExemplo1({nome:'Fulano', idade: 34});							erro

let x1 = (a:number) => a;
let x2 = (b:number, c:string) => b + c;
let x3 = (b:number, c:string) => b;

console.log(10);
console.log(10, 'teste');

//x2 = x1;											erro - x2 tem mais argumentos
x3 = x1;
console.log(x3(50,'qualquer coisa'));


let itens = [1,2,3];

itens.forEach((item,index,array) => console.log(item));
itens.forEach(item => console.log(item));
