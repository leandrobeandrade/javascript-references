function listaReversa(lista) {
    var listaReversada = [];
    for (var i = lista.length - 1; i >= 0; i--) {
        listaReversada.push(lista[i]);
    }
    return listaReversada;
}
var nomes = ['Fulano', 'Beltrano', 'Ciclano'];
var numer = [1, 2, 3, 4, 5];
var nomesReversados = listaReversa(nomes);
var numerReversados = listaReversa(numer);
console.log(nomesReversados);
console.log(numerReversados);
var PessoaTeste = /** @class */ (function () {
    function PessoaTeste(nome) {
        this._nome = nome;
    }
    PessoaTeste.prototype.print = function () {
        console.log("nome: " + this._nome);
    };
    Object.defineProperty(PessoaTeste.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            this._nome = valor;
        },
        enumerable: true,
        configurable: true
    });
    return PessoaTeste;
}());
var PessoaRepositorio = /** @class */ (function () {
    function PessoaRepositorio() {
    }
    PessoaRepositorio.prototype.encontrarId = function (id) {
        console.log("Id: " + id);
        return new PessoaTeste('Belciclano');
    };
    PessoaRepositorio.prototype.salvar = function (entidade) {
        return new PessoaTeste('Outro qualquer');
    };
    return PessoaRepositorio;
}());
var pessoaRepositorio = new PessoaRepositorio();
console.log(pessoaRepositorio.encontrarId(5));
console.log(pessoaRepositorio.salvar(new PessoaTeste('Testando')));
