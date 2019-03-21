var vetor = ['Javascript', 'Typescript'];  
for (var i = 0; i < vetor.length; i++) { // Loop normal
    console.log(vetor[i]);
}
console.log('---------------');
vetor.forEach(function (nome) {
    console.log(nome); // Não suporta break, continue e return
});
for (var array in vetor) { // Emascript 5
    console.log(array);
    console.log(typeof (array));
}
console.log('---------------');
for (var _i = 0, vetor_1 = vetor; _i < vetor_1.length; _i++) {
    var array = vetor_1[_i];
    console.log(array);
}
console.log('---------------');
var pessoa = { nome: 'Fulano', sobrenome: 'Beltrano' };
for (var prop in pessoa) {
    console.log(prop);
} 
