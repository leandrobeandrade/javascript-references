let nomes1 = new Set<string>(); gbgbgb
nomes1.add('Fulano');
nomes1.add('Beltrano');
nomes1.add('Fulano');
nomes1.add('Fulano');

console.log(nomes1);


let nomes2 = new Set<string>(['Ciclano','Belciclano']);
console.log(nomes2);
console.log(nomes2.has('ciclano'));
console.log(nomes2.has('Ciclano'));

for(let aux of nomes2){														// Não funcionou	
	console.log(aux);
}  

nomes2.forEach(value => console.log(value));
