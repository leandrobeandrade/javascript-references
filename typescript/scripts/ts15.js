var pessoa = { nome: 'Fulano', sobrenome: 'Beltrano' }; 
var nome1 = pessoa;
var nome2 = pessoa.nome;
var nome3 = pessoa.sobrenome; // Acesso normal
console.log(nome1);
console.log(nome2);
console.log(nome3);
var nomes = pessoa.nome, sobrenomes = pessoa.sobrenome; // Destruturação
console.log(nomes, '-', sobrenomes);
var vetor = ['Javascript', 'Typescript'];
console.log(vetor[0]); // Acesso normal
console.log(vetor[1]);
var a = vetor[0], b = vetor[1]; // Destruturação
console.log(a, '-', b);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
function exemplo1(pessoa) {
    console.log(pessoa.nome); // Acesso normal
}
exemplo1(new Pessoa('Fulano'));
function exemplo2(_a) {
    var nome = _a.nome;
    console.log(nome); // Destruturação
}
exemplo2(new Pessoa('Beltrano'));
exemplo2({ nome: 'Ciclano' });
