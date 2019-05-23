var times1 = ['Ceará', 'Grêmio', 'Vasco', 'Atlético-MG'];  
var times2 = ['Santos', 'Cruzeiro'];
		
var teste1 = times1.pop(); 				// retira o ultimo elemento do vetor
times1.push('Atlético-MG', 'Bahia');
var teste2 = times1.shift(); 				// retira o primeiro elemento do vetor
times1.unshift('Palmeiras'); 				// adiciona um elemento no primeiro indice[0] do vetor
times1.splice(1,0, 'Ceará'); 				// adiciona um elemento na posição(1) e não retira nenhum(0) do vetor
times1.splice(1,1) 					// retira o segundo elemento do vetor
var teste3 = times1.concat(times2);			// junta os vetores
var teste4 = times1.slice(3);				// pega o elemento(s) nos índice(s) informado(s)
var teste5 = times1.reverse();				// reverte a ordem interna do vetor alterando o vetor original

var teste6 = times1.forEach((elemento) =>       	// itera sobre o vetor
console.log(elemento));	

console.log(teste1);
console.log(teste2);
console.log(times1);
console.log(teste3);
console.log(teste4);
console.log(teste5);
console.log(teste6);


// FUNÇÃO DE COMPARAÇÃO

var numeros1 = [80,10,25,70,50];
var teste6 = numeros1.sort(function(a,b) {
	return a - b;
});

console.log(teste6);
