var times1 = ['Palmeiras', 'Grêmio', 'Vasco', 'Atlético-MG'];
var times2 = ['Palmeiras', 'Grêmio', 'Vasco', 'Atlético-MG'];

var teste1 = times1[0];
var teste2 = times1.length;
var teste3 = times1.sort(); // ordena por ordem alfabetica
var teste4 = times2.push('Coritiba'); // adiciona elementos ao vetor
times2[5] = 'Bahia'; // adicona elemantos na posição informada
var teste5 = Array.isArray(times1);
var teste6 = typeof times1;
var teste7 = times1 instanceof Array;
var teste8 = times2.toString();
var teste9 = times2.join('-');

console.log(teste1);
console.log(teste2);
console.log(teste3);
console.log(times2);
console.log(teste5);
console.log(teste6);
console.log(teste7);
console.log(teste8);
console.log(teste9);
