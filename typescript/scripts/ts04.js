var __extends = (this && this.__extends) || (function () { 
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.print = function () {
        console.log("nome: " + this.nome);
    };
    return Pessoa;
}());
var Empregado = /** @class */ (function (_super) {
    __extends(Empregado, _super);
    function Empregado(nome, salario) {
        var _this = _super.call(this, nome) || this;
        _this.salario = salario;
        return _this;
    }
    Empregado.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("salario: " + this.salario);
    };
    return Empregado;
}(Pessoa));
var pes1 = new Pessoa('Fulano');
var emp1 = new Empregado('Beltrano', 2500);
pes1.print();
emp1.print();
var pes2 = { nome: 'Ciclano' }; // cria uma pessoa de Pessoa
console.log(pes2);
var pes3 = {};
pes3.nome = 'Belciclano'; // cria um pessoa de Pessoa
console.log(pes3);
var pes4 = new Empregado('Ted', 3500); // polimorfismo
pes4.print();
