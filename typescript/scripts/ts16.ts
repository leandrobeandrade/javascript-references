let vetor = ['Javascript', 'Typescript'];      

for(let i=0; i<vetor.length; i++) {						// Loop normal
	console.log(vetor[i]);
}

console.log('---------------');

vetor.forEach((nome) => {
	console.log(nome);							// Não suporta break, continue e return
});

for(let array in vetor) {							// Ecmascript 5
	console.log(array);
	console.log(typeof (array));
}

console.log('---------------');

for(let array of vetor) {							// Ecmascript 6
	console.log(array);
}

console.log('---------------');



let pessoa = {nome:'Fulano', sobrenome:'Beltrano'};

for(let prop in pessoa){
	console.log(prop);
}

 
