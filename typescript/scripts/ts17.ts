let nome_idade1 = new Map<string, number>();
nome_idade1.set('Fulano', 50);
nome_idade1.set('Beltrano', 40);

console.log(nome_idade1);


let nome_idade2 = new Map<string, number>().set('Fulano', 60).set('Beltrano', 30);
console.log(nome_idade2);


let nome_idade3 = new Map<string, number>([
	['Ciclano', 70], ['Belciclano', 20]
]);
console.log(nome_idade3);
console.log(nome_idade3.get('Ciclano'));
console.log(nome_idade3.has('Ciclano'));

for(let key of nome_idade3.keys()) {										// Não retornou
	console.log(key);
}

for(let val of nome_idade3.values()) {										// Não retornou
	console.log(val);
}

for(let ent of nome_idade3.entries()) {										// Não retornou
	console.log(`${ent[0]} ${ent[1]}`);
}

nome_idade3.clear();
console.log(nome_idade3.size);